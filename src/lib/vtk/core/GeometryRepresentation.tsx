import React, { useEffect, useRef, useContext } from 'react';

import usePreviousValue from '../usePreviousValue';
import { ViewContext, RepresentationContext, DownstreamContext } from './View';
import { vec2Equals } from '../utils';

import vtkActor from '@kitware/vtk.js/Rendering/Core/Actor.js';
import vtkMapper from '@kitware/vtk.js/Rendering/Core/Mapper.js';
import vtkColorMaps from '@kitware/vtk.js/Rendering/Core/ColorTransferFunction/ColorMaps.js';
import vtkColorTransferFunction from '@kitware/vtk.js/Rendering/Core/ColorTransferFunction.js';

import vtkCubeAxesActor from '@kitware/vtk.js/Rendering/Core/CubeAxesActor.js';
import vtkScalarBarActor from '@kitware/vtk.js/Rendering/Core/ScalarBarActor.js';

/**
 * GeometryRepresentation is responsible to convert a vtkPolyData into rendering
 * It takes the following set of properties:
 *   - colorBy: ['POINTS', ''],
 *   - pointSize: 1,
 *   - color: [1,1,1],
 */

export default function GeometryRepresentation(props: GeometryRepresentationProps) {
    const view = useContext(ViewContext)
    const context = useRef(null)
    const prevProps = usePreviousValue(props);

    useEffect(() => {
        if (!context.current) {
            const currentVisibility = true
            const validData = false
            const actor = vtkActor.newInstance({
                visibility: false,
                // @ts-ignore
                representationId: props.id,
            });
            const lookupTable = vtkColorTransferFunction.newInstance();
            const mapper = vtkMapper.newInstance({
                // @ts-ignore
                lookupTable: lookupTable,
                useLookupTableScalarRange: true,
            });
            actor.setMapper(mapper)
            // Scalar Bar
            const scalarBar = vtkScalarBarActor.newInstance();
            // @ts-ignore
            scalarBar.setScalarsToColors(lookupTable);
            scalarBar.setVisibility(false);
            const cubeAxis = null
            const subscriptions = [];
            context.current = { actor, lookupTable, mapper, scalarBar, subscriptions, cubeAxis, currentVisibility, validData }

        }
        return () => {
            while (context.current.subscriptions.length) {
                context.current.subscriptions.pop().unsubscribe();
            }

            if (view && view.renderer) {
                view.renderer.removeActor(context.current.scalarBar);
                // view.renderer.removeActor(context.current.cubeAxes);
                view.renderer.removeActor(context.current.actor);
            }

            context.current.scalarBar.delete();

            if (context.current.cubeAxes) {
                context.current.cubeAxes.delete();
            }

            context.current.actor.delete();

            context.current.mapper.delete();

            context.current.lookupTable.delete();
            context.current = null
        }
    }, [])

    useEffect(() => {
        if (context.current) {
            update(props, prevProps)
        }

    }, [props])



    function initCubeAxes() {
        context.current.cubeAxes = vtkCubeAxesActor.newInstance({
            visibility: false,
            dataBounds: [-1, 1, -1, 1, -1, 1],
        });
        Array.from(context.current.cubeAxes.getActors()).forEach(({ setVisibility }) =>
            setVisibility(false)
        );

        const updateCubeAxes = () => {
            if (context.current.mapper.getInputData()) {
                if (context.current.subscriptions.length === 1) {
                    // add input data as well
                    context.current.subscriptions.push(
                        context.current.mapper.getInputData().onModified(updateCubeAxes)
                    );
                }

                const bounds = context.current.mapper.getInputData().getBounds();
                if (bounds[0] < bounds[1]) {
                    if (context.current.cubeAxes) {
                        context.current.cubeAxes.setDataBounds(bounds);
                    }
                    if (view) {
                        view.renderView();
                    }
                }
            }
        };

        context.current.subscriptions.push(context.current.mapper.onModified(updateCubeAxes));
    }

    render() {
        return (
            <ViewContext.Consumer>
                {(view) => {
                    if (!view) {
                        if (context.current.cubeAxes) {
                            context.current.cubeAxes.setCamera(view.renderer.getActiveCamera());
                            view.renderer.addActor(context.current.cubeAxes);
                        }

                        view.renderer.addActor(context.current.scalarBar);
                        view.renderer.addActor(context.current.actor);
                        view = view;
                    }
                    return (
                        <RepresentationContext.Provider value={context.current}>
                            <DownstreamContext.Provider value={context.current.mapper}>
                                <div key={props.id} id={props.id}>
                                    {props.children}
                                </div>
                            </DownstreamContext.Provider>
                        </RepresentationContext.Provider>
                    );
                }}
            </ViewContext.Consumer>
        );
    }


    function update(props, previous?) {
        const {
            cubeAxesStyle,
            showCubeAxes,
            actor,
            mapper,
            property,
            colorMapPreset,
            colorDataRange,
        } = props;
        let changed = false;

        if (actor && (!previous || actor !== previous.actor)) {
            changed = context.current.actor.set(actor) || changed;
        }
        if (mapper && (!previous || mapper !== previous.mapper)) {
            changed = context.current.mapper.set(mapper) || changed;
        }
        if (property && (!previous || property !== previous.property)) {
            changed = context.current.actor.getProperty().set(property) || changed;
        }

        if (
            colorMapPreset &&
            (!previous || colorMapPreset !== previous.colorMapPreset)
        ) {
            changed = true;
            const preset = vtkColorMaps.getPresetByName(colorMapPreset);
            context.current.lookupTable.applyColorMap(preset);
            context.current.lookupTable.setMappingRange(...colorDataRange);
            context.current.lookupTable.updateRange();
        }

        if (
            colorDataRange &&
            (!previous || !vec2Equals(colorDataRange, previous.colorDataRange))
        ) {
            changed = true;
            context.current.lookupTable.setMappingRange(...colorDataRange);
            context.current.lookupTable.updateRange();
        }

        if (showCubeAxes && context.current.cubeAxes == null) {
            changed = true;
            context.current.initCubeAxes();

            if (
                cubeAxesStyle &&
                (!previous || cubeAxesStyle !== previous.cubeAxesStyle)
            ) {
                context.current.cubeAxes.set(cubeAxesStyle);
            }
        }

        if (
            context.current.cubeAxes != null &&
            showCubeAxes !== context.current.cubeAxes.getVisibility()
        ) {
            changed = true;
            context.current.cubeAxes.setVisibility(showCubeAxes && context.current.validData);
            Array.from(context.current.cubeAxes.getActors()).forEach(({ setVisibility }) =>
                setVisibility(showCubeAxes && context.current.validData)
            );
        }

        // scalar bars
        changed =
            context.current.scalarBar.setVisibility(props.showScalarBar && context.current.validData) ||
            changed;
        changed = context.current.scalarBar.setAxisLabel(props.scalarBarTitle) || changed;
        changed = context.current.scalarBar.set(props.scalarBarStyle || {}) || changed;

        // actor visibility
        if (actor && actor.visibility !== undefined) {
            context.current.currentVisibility = actor.visibility;
            changed =
                context.current.actor.setVisibility(context.current.currentVisibility && context.current.validData) ||
                changed;
        }

        if (changed) {
            // trigger render
            dataChanged();
        }
    }

    function dataAvailable() {
        if (!context.current.validData) {
            context.current.validData = true;
            context.current.actor.setVisibility(context.current.currentVisibility);
            context.current.scalarBar.setVisibility(props.showScalarBar);
            if (context.current.cubeAxes) {
                context.current.cubeAxes.setVisibility(props.showCubeAxes);
                Array.from(context.current.cubeAxes.getActors()).forEach(({ setVisibility }) =>
                    setVisibility(context.current.props.showCubeAxes)
                );
            }
            // trigger render
            dataChanged();
        }
    }

    function dataChanged() {
        if (view) {
            view.renderView();
        }
    }
}

GeometryRepresentation.defaultProps = {
    colorMapPreset: 'erdc_rainbow_bright',
    colorDataRange: [0, 1],
    showCubeAxes: false,
    showScalarBar: false,
    scalarBarTitle: '',

}
type GeometryRepresentationProps = {
    /**
      * The ID used to identify this component.
      */
    id?: string;

    /**
     * Properties to set to the actor
     */
    actor?: object;

    /**
     * Properties to set to the actor
     */
    mapper?: object;

    /**
     * Properties to set to the actor.property
     */
    property?: object;

    /**
     * Preset name for the lookup table color map
     */
    colorMapPreset?: string;

    /**
     * Data range use for the colorMap
     */
    colorDataRange?: Array<number>;

    /**
     * Show/Hide Cube Axes for the given representation
     */
    showCubeAxes?: boolean;

    /**
     * Configure cube Axes style by overriding the set of properties defined
     * https?://github.com/Kitware/vtk-js/blob/HEAD/Sources/Rendering/Core/CubeAxesActor/index.js#L703-L71;
     */
    cubeAxesStyle?: object;

    /**
     * Show hide scalar bar for that representation
     */
    showScalarBar?: boolean;

    /**
     * Use given string as title for scalar bar. By default it is empty (no title).
     */
    scalarBarTitle?: string;

    /**
     * Configure scalar bar style by overriding the set of properties defined
     * https?://github.com/Kitware/vtk-js/blob/master/Sources/Rendering/Core/ScalarBarActor/index.js#L776-L79;
     */
    scalarBarStyle?: object;


    children?: any;

}