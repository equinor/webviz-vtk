import React, { Component } from 'react';

import { pick, pickClosest } from "../pickingUtils"
import { assignManipulators } from '../manipulator';

// ----------------------------------------------------------------------------
// vtk.js Rendering stack
// ----------------------------------------------------------------------------

import { debounce } from '@kitware/vtk.js/macros.js';

import vtkOpenGLRenderWindow from '@kitware/vtk.js/Rendering/OpenGL/RenderWindow.js';
import vtkRenderWindow from '@kitware/vtk.js/Rendering/Core/RenderWindow.js';
import vtkCamera from '@kitware/vtk.js/Rendering/Core/Camera';
import vtkRenderWindowInteractor from '@kitware/vtk.js/Rendering/Core/RenderWindowInteractor.js';
import vtkRenderer from '@kitware/vtk.js/Rendering/Core/Renderer.js';
import vtkInteractorStyleManipulator from '@kitware/vtk.js/Interaction/Style/InteractorStyleManipulator.js';

import vtkBoundingBox from '@kitware/vtk.js/Common/DataModel/BoundingBox.js';
import vtkCubeAxesActor from '@kitware/vtk.js/Rendering/Core/CubeAxesActor.js';

import vtkAxesActor from '@kitware/vtk.js/Rendering/Core/AxesActor';
import vtkOrientationMarkerWidget from '@kitware/vtk.js/Interaction/Widgets/OrientationMarkerWidget';

// Picking handling
import vtkOpenGLHardwareSelector from '@kitware/vtk.js/Rendering/OpenGL/HardwareSelector.js';
import { FieldAssociations } from '@kitware/vtk.js/Common/DataModel/DataSet/Constants.js';

// ----------------------------------------------------------------------------
// Context to pass parent variables to children
// ----------------------------------------------------------------------------

export const ViewContext = React.createContext(null);
export const RepresentationContext = React.createContext(null);
export const DataSetContext = React.createContext(null);
export const FieldsContext = React.createContext(null);
export const DownstreamContext = React.createContext(null);


// ----------------------------------------------------------------------------
// Default css styles
// ----------------------------------------------------------------------------

const RENDERER_STYLE = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
};
/**
 * View is responsible to render vtk.js data.
 * It takes the following set of properties:
 *   - `background`: [0.2, 0.3, 0.4]
 *   - `cameraPosition`: [0, 0, 1]
 *   - `cameraViewUp`: [0, 1, 0]
 *   - `cameraParallelProjection`: false
 *   - `showOrientationAxes`: true
 */
export default class View extends Component<ViewProps> {
    static defaultProps = {
        style: {
            width: '100%',
            height: '100%',
        },
        background: [0.2, 0.3, 0.4],
        cameraPosition: [0, 0, 1],
        cameraViewUp: [0, 1, 0],
        cameraParallelProjection: false,
        triggerRender: 0,
        triggerResetCamera: 0,
        interactorSettings: [
            {
                button: 1,
                action: 'Rotate',
            },
            {
                button: 2,
                action: 'Pan',
            },
            {
                button: 3,
                action: 'Zoom',
                scrollEnabled: true,
            },
            {
                button: 1,
                action: 'Pan',
                alt: true,
            },
            {
                button: 1,
                action: 'Zoom',
                control: true,
            },
            {
                button: 1,
                action: 'Select',
                shift: true,
            },
            {
                button: 1,
                action: 'Roll',
                alt: true,
                shift: true,
            },
        ],
        interactive: true,
        pickingModes: [],
        showCubeAxes: false,
        pointerSize: 0,
        showOrientationAxes: false,
    }
    containerRef: React.RefObject<HTMLInputElement>
    renderWindow: vtkRenderWindow
    renderer: vtkRenderer
    camera: vtkCamera
    openglRenderWindow: vtkOpenGLRenderWindow
    interactor: vtkRenderWindowInteractor
    style: vtkInteractorStyleManipulator
    axesActor: vtkAxesActor
    orientationWidget: vtkOrientationMarkerWidget
    selector: vtkOpenGLHardwareSelector
    resizeObserver: ResizeObserver
    cubeAxes: vtkCubeAxesActor
    hasFocus: boolean
    lastSelection: Array<any>
    onBoxSelectChange: any
    subscriptions: Array<any>
    selections: any
    previousSelectedData: any
    resetCameraTimeout: any
    renderViewTimeout: any
    firstResetTimeout: any


    constructor(props: ViewProps) {
        super(props);
        this.containerRef = React.createRef();
        this.createView()
        if (props.interactive) {
            this.createInteractor()
        }
        this.createOrientationWidget()
        this.createSelector()
        this.createCubeAxis()

        // Resize handling
        this.resizeObserver = new ResizeObserver(() => this.onResize());
        this.resetCamera = this.resetCamera.bind(this);

        // Internal functions
        this.hasFocus = false;
        this.lastSelection = [];
        this.onBoxSelectChange = this.select;

        this.subscriptions = [];
        this.subscriptions.push(
            // @ts-ignore
            this.renderer.onEvent(({ type, renderer }) => {
                if (renderer && type === 'ComputeVisiblePropBoundsEvent') {
                    this.debouncedCubeBounds();
                }
            })
        );
    }

    createView = () => {
        this.renderWindow = vtkRenderWindow.newInstance();
        this.renderer = vtkRenderer.newInstance();
        this.renderWindow.addRenderer(this.renderer);
        this.camera = this.renderer.getActiveCamera();
        this.openglRenderWindow = vtkOpenGLRenderWindow.newInstance();
        this.renderWindow.addView(this.openglRenderWindow);

    };
    createInteractor = () => {
        this.interactor = vtkRenderWindowInteractor.newInstance();
        this.interactor.setView(this.openglRenderWindow);
        this.interactor.initialize();

        // Interactor style
        this.style = vtkInteractorStyleManipulator.newInstance();
        this.interactor.setInteractorStyle(this.style);
    }
    createOrientationWidget = () => {
        this.axesActor = vtkAxesActor.newInstance();
        this.orientationWidget = vtkOrientationMarkerWidget.newInstance({
            actor: this.axesActor,
            interactor: this.interactor,
        });
        this.orientationWidget.setEnabled(true);
        this.orientationWidget.setViewportCorner(
            // @ts-ignore
            vtkOrientationMarkerWidget.Corners.BOTTOM_LEFT
        );
        this.orientationWidget.setViewportSize(0.15);
        this.orientationWidget.setMinPixelSize(100);
        this.orientationWidget.setMaxPixelSize(300);

    }
    createSelector = () => {
        this.selector = vtkOpenGLHardwareSelector.newInstance({
            captureZValues: true,
        });
        this.selector.setFieldAssociation(
            FieldAssociations.FIELD_ASSOCIATION_POINTS
        );
        this.selector.attach(this.openglRenderWindow, this.renderer);
    }
    createCubeAxis = () => {
        this.cubeAxes = vtkCubeAxesActor.newInstance({
            visibility: false,
            dataBounds: [-1, 1, -1, 1, -1, 1],
        });
        Array.from(this.cubeAxes.getActors()).forEach(({ setVisibility }) =>
            setVisibility(false)
        );
        this.cubeAxes.setCamera(this.camera);
        this.renderer.addActor(this.cubeAxes);

    }

    renderView = () => {
        this.updateCubeBounds();
        this.renderWindow.render();
    };
    onEnter = () => {
        this.hasFocus = true;
    };
    onLeave = () => {
        this.hasFocus = false;
    };

    getSelection(x: number, y: number): Array<any> {
        const tolerance = this.getPointerSizeTolerance();
        return pickClosest(
            Math.floor(x),
            Math.floor(y),
            tolerance,
            this.selector,
            this.openglRenderWindow,
            this.renderer
        );
    }
    updateCubeBounds = (): void => {
        if (!this.props.showCubeAxes) {
            return;
        }
        let bbox = vtkBoundingBox.newInstance({ bounds: [0, 0, 0, 0, 0, 0] });
        bbox.reset();
        // @ts-ignore
        const { props } = this.renderer.get('props');
        for (let i = 0; i < props.length; i++) {
            const prop = props[i];
            if (
                prop.getVisibility() &&
                prop.getUseBounds() &&
                prop !== this.cubeAxes
            ) {
                bbox.addBounds(...prop.getBounds());
            }
        }
        this.cubeAxes.setDataBounds(bbox.getBounds());
    };
    debouncedCubeBounds = debounce(this.updateCubeBounds, 50);
    getPointerSizeTolerance() {
        return this.props.pointerSize / 2;
    }

    getScreenEventPositionFor(source) {
        const bounds = this.containerRef.current.getBoundingClientRect();
        const [canvasWidth, canvasHeight] = this.openglRenderWindow.getSize();
        const scaleX = canvasWidth / bounds.width;
        const scaleY = canvasHeight / bounds.height;
        const position = {
            x: scaleX * (source.clientX - bounds.left),
            y: scaleY * (bounds.height - source.clientY + bounds.top),
            z: 0,
        };
        return position;
    }

    handleMouseDown = (callback, { x, y }, event) => {
        const selection = this.getSelection(x, y)
        if (selection?.length) {
            this.style.setCenterOfRotation(selection[0].worldPosition);
        }
    }
    handleKey = (e) => {
        if (!this.hasFocus) {
            return;
        }
        switch (e.code) {
            case 'KeyR':
                this.resetCamera();
                break;
            default:
                // console.log(e.code);
                break;
        }
    };
    hover = debounce(({ x, y }, event) => {
        if (this.props.pickingModes.indexOf('hover') === -1) {
            return;
        }
        const selection = this.getSelection(x, y)


        // Guard against trigger of empty selection
        if (this.lastSelection.length === 0 && selection.length === 0) {
            return;
        }
        this.lastSelection = selection;

        // Share the selection with the rest of the world
        if (this.props.onHover) {
            this.props.onHover(selection[0], event);
        }

        if ('setProps' in this.props) {
            this.props.setProps({ hoverInfo: selection[0] });
        }
    }, 10);
    select = ({ selection }) => {
        if (this.props.pickingModes.indexOf('select') === -1) {
            return;
        }
        const [x1, x2, y1, y2] = selection;
        const pickResult = pick(x1, y1, x2, y2, this.selector, this.openglRenderWindow, this.renderer, true);

        // Share the selection with the rest of the world
        if (this.props.onSelect) {
            this.props.onSelect(pickResult, event);
        }

        if ('setProps' in this.props) {
            this.props.setProps({ selectInfo: pickResult });
        }
    };
    // Handle picking
    handlePicking = (callback, pickingMode, { x, y }, event) => {
        if (this.props.pickingModes.indexOf(pickingMode) === -1) {
            return;
        }

        const selection = this.getSelection(x, y)

        // Share the selection with the rest of the world

        if (callback) {
            callback(selection[0], event);
        }

        if ('setProps' in this.props) {
            this.props.setProps({ [`${pickingMode}Info`]: selection[0] });
        }
    };
    onClick = (e) =>
        this.handlePicking(
            this.props.onClick,
            'click',
            this.getScreenEventPositionFor(e),
            e
        );
    onMouseDown = (e) =>
        this.handleMouseDown(
            this.props.onMouseDown,
            this.getScreenEventPositionFor(e),
            e
        );
    onMouseUp = (e) =>
        this.handlePicking(
            this.props.onMouseUp,
            'mouseUp',
            this.getScreenEventPositionFor(e),
            e
        );
    onMouseMove = (e) => this.hover(this.getScreenEventPositionFor(e), e);
    render() {
        const { id, children, style, className } = this.props;

        return (
            <div
                key={id}
                id={id}
                className={className}
                style={{ position: 'relative', ...style }}
                onMouseEnter={this.onEnter}
                onMouseLeave={this.onLeave}
                onClick={this.onClick}
                onMouseUp={this.onMouseUp}
                onMouseMove={this.onMouseMove}
            >
                {/* @ts-ignore */}
                <div style={RENDERER_STYLE} ref={this.containerRef} />
                <div>
                    <ViewContext.Provider value={this}>{children}</ViewContext.Provider>
                </div>
            </div>
        );
    }

    onResize() {
        const container = this.containerRef.current;
        if (container) {
            const devicePixelRatio = window.devicePixelRatio || 1;
            const { width, height } = container.getBoundingClientRect();
            const w = Math.floor(width * devicePixelRatio);
            const h = Math.floor(height * devicePixelRatio);
            this.openglRenderWindow.setSize(Math.max(w, 10), Math.max(h, 10));
            this.renderWindow.render();
        }
    }

    componentDidMount() {
        const container = this.containerRef.current;
        this.openglRenderWindow.setContainer(container);
        if (this.props.interactive) {
            this.interactor.bindEvents(container);
        }
        this.onResize();
        this.resizeObserver.observe(container);
        this.update(this.props);
        document.addEventListener('keyup', this.handleKey);
        this.resetCamera();

        // Give a chance for the first layout to properly reset the camera
        this.firstResetTimeout = setTimeout(() => this.resetCamera(), 100);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.update(this.props, prevProps);
    }

    componentWillUnmount() {
        if (this.debouncedCubeBounds) this.debouncedCubeBounds.cancel();
        if (this.hover) this.hover.cancel();
        clearTimeout(this.resetCameraTimeout);
        clearTimeout(this.renderViewTimeout);
        clearTimeout(this.firstResetTimeout);

        while (this.subscriptions.length) {
            this.subscriptions.pop().unsubscribe();
        }

        document.removeEventListener('keyup', this.handleKey);
        // Stop size listening
        this.resizeObserver.disconnect();
        this.resizeObserver = null;

        // Detatch from DOM
        if (this.interactor) {
            this.interactor.unbindEvents();
        }
        this.openglRenderWindow.setContainer(null);

        // Free memory
        this.renderWindow.removeRenderer(this.renderer);
        this.renderWindow.removeView(this.openglRenderWindow);

        if (this.interactor) {
            this.interactor.delete();
            this.interactor = null;
        }

        this.renderer.delete();
        this.renderer = null;

        this.renderWindow.delete();
        this.renderWindow = null;

        this.openglRenderWindow.delete();
        this.openglRenderWindow = null;
    }

    update(props, previous?) {
        const {
            background,
            interactorSettings,
            interactive,
            cameraPosition,
            cameraViewUp,
            cameraParallelProjection,
            triggerRender,
            triggerResetCamera,
            showCubeAxes,
            cubeAxesStyle,
            showOrientationAxes,
        } = props;
        if (background && (!previous || background !== previous.background)) {
            this.renderer.setBackground(background);
        }
        if (
            interactive &&
            interactorSettings &&
            (!previous || interactorSettings !== previous.interactorSettings)
        ) {
            assignManipulators(this.style, interactorSettings, this);
        }
        if (
            cameraParallelProjection &&
            (!previous ||
                cameraParallelProjection !== previous.cameraParallelProjection)
        ) {
            const camera = this.renderer.getActiveCamera();
            camera.setParallelProjection(cameraParallelProjection);
            if (previous) {
                this.resetCamera();
            }
        }
        if (
            cameraPosition &&
            (!previous ||
                JSON.stringify(cameraPosition) !==
                JSON.stringify(previous.cameraPosition))
        ) {
            const camera = this.renderer.getActiveCamera();
            camera.set({
                position: cameraPosition,
                viewUp: cameraViewUp,
                focalPoint: [0, 0, 0],
            });
            if (previous) {
                this.resetCamera();
            }
        }

        if (this.cubeAxes.setVisibility(showCubeAxes)) {
            Array.from(this.cubeAxes.getActors()).forEach(({ setVisibility }) =>
                setVisibility(showCubeAxes)
            );
            this.renderView();
        }

        if (this.cubeAxes.set(cubeAxesStyle || {})) {
            this.renderView();
        }

        if (showOrientationAxes !== this.orientationWidget.getEnabled()) {
            this.orientationWidget.setEnabled(showOrientationAxes);
        }

        // Allow to trigger method call from property change
        if (previous && triggerRender !== previous.triggerRender) {
            this.renderViewTimeout = setTimeout(this.renderView, 0);
        }
        if (previous && triggerResetCamera !== previous.triggerResetCamera) {
            this.resetCameraTimeout = setTimeout(this.resetCamera, 0);
        }

        // Assign the mouseDown event, we can't use the React event system
        // because the mouseDown event is swallowed by other logic
        // @ts-ignore
        const canvas = this.openglRenderWindow.getCanvas();
        canvas.addEventListener('mousedown', this.onMouseDown);
    }

    resetCamera() {
        this.renderer.resetCamera();
        if (this.props.interactive) {
            this.style.setCenterOfRotation(
                this.renderer.getActiveCamera().getFocalPoint()
            );
        }
        this.renderWindow.render();
    }
}



type ViewProps = {
    /**
     * The ID used to identify this component.
     */
    id?: string;

    /**
     * Allow user to override the default View style { width: '100%', height: '100%' }
     */
    style?: object;

    /**
     * Allow user to provide custom className associated to root element
     */
    className?: string;

    /**
     * The color of the view background using 3 floating numbers
     * between 0-1 of Red, Green, Blue component.
     */
    background?: Array<number>;

    /**
     * Configure the interactions
     */
    interactorSettings?: Array<object>;

    /**
     * Enable/Disable interaction
     */
    interactive?: boolean;

    /**
     * Initial camera position from an object in [0,0,0]
     */
    cameraPosition?: Array<number>

    /**
     * Initial camera position from an object in [0,0,0]
     */
    cameraViewUp?: Array<number>

    /**
     * Use parallel projection (default: false)
     */
    cameraParallelProjection?: boolean;

    /**
     * Property use to trigger a render when changing.
     */
    triggerRender?: number;

    /**
     * Property use to trigger a resetCamera when changing.
     */
    triggerResetCamera?: number;

    /**
     * List of representation to show
     */
    children?: Array<React.ReactNode> | React.ReactNode;


    /**
     * List of picking listeners to bind. By default it is disabled (empty array).
     */
    pickingModes?: Array<'click' | 'hover' | 'select'>;


    /**
     * User callback function for click
     */
    onClick?: Function;

    /**
     * Read-only prop. To use this, make sure that `pickingModes` contains `click`.
     * This prop is updated when an element in the map is clicked. This contains
     * the picking info describing the object being clicked on.
     */
    clickInfo?: object;

    /**
     * User callback function for mouse down
     */
    onMouseDown?: Function;

    /**
     * Read-only prop. To use this, make sure that `pickingModes` contains `mouseDown`.
     * This prop is updated when a mouse down event is fired on an element in the map. This contains
     * the picking info describing the object interested by the event.
     */
    mouseDownInfo?: object;

    /**
     * User callback function for mouse up
     */
    onMouseUp?: Function;

    /**
     * Read-only prop. To use this, make sure that `pickingModes` contains `mouseUp`.
     * This prop is updated when a mouse up event is fired on an element in the map. This contains
     * the picking info describing the object interested by the event.
     */
    mouseUpInfo?: object;

    /**
     * User callback function for hover
     */
    onHover?: Function;

    /**
     * Read-only prop. To use this, make sure that `pickingModes` contains `hover`.
     * This prop is updated when an element in the map is hovered. This contains
     * the picking info describing the object being hovered.
     */
    hoverInfo?: object;

    /**
     * User callback function for box select
     */
    onSelect?: Function;

    /**
     * Read-only prop. To use this, make sure that `pickingModes` contains `select`.
     * This prop is updated when an element in the view is select. This contains
     * the picking info describing the object being select along with the frustrum.
     */
    selectInfo?: object;

    /**
     * Defines the tolerance of the click and hover selection.
     */
    pointerSize?: number;

    /**
     * Show/Hide Cube Axes for the given representation
     */
    showCubeAxes?: boolean;

    /**
     * Configure cube Axes style by overriding the set of properties defined
     * https://github.com/Kitware/vtk-js/blob/HEAD/Sources/Rendering/Core/CubeAxesActor/index.js#L703-L719
     */
    cubeAxesStyle?: object;

    /**
     * Show/Hide orientation axes.
     */
    showOrientationAxes?: boolean;
    /**
       * Update props to trigger callbacks.
       */
    setProps?: (props: Record<string, any>) => void;
};
