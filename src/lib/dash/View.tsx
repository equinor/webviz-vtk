/* eslint-disable no-magic-numbers */
import React from 'react';
import PropTypes from 'prop-types';
import { View as VtkItem } from '../AsyncReactVTK';
import { DashComponentProps } from '../props';
/**
 * View is responsible to render vtk.js data.
 * It takes the following set of properties:
 *   - `background`: [0.2, 0.3, 0.4]
 *   - `cameraPosition`: [0, 0, 1]
 *   - `cameraViewUp`: [0, 1, 0]
 *   - `cameraParallelProjection`: false
 *   - `showOrientationAxes`: true
 */
export default function View(props: ViewProps) {
  return <React.Suspense fallback={null}><VtkItem {...props} /></React.Suspense>;
};

View.defaultProps = {
  style: {
    width: '100%',
    height: '100%',
  },
  triggerRender: 0,
  triggerResetCamera: 0,
  background: [0.2, 0.3, 0.4],
  cameraPosition: [0, 0, 1],
  cameraViewUp: [0, 1, 0],
  cameraFocalPoint: [0, 0, 0],
  autoResetCamera: true,
  cameraParallelProjection: false,
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
      shift: true,
    },
    {
      button: 1,
      action: 'Zoom',
      alt: true,
    },
    {
      button: 1,
      action: 'ZoomToMouse',
      control: true,
    },
    {
      button: 1,
      action: 'Roll',
      alt: true,
      shift: true,
    },
  ],
  showOrientationAxes: true,
};
type ViewProps = {
  /**
   * Current color value
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
   * Initial camera position from an object in [0,0,0]
   */
  cameraPosition?: Array<number>;

  /**
   * Initial camera position from an object in [0,0,0]
   */
  cameraViewUp?: Array<number>;

  /**
    * Initial camera focal point from an object in [0,0,0]
    */
  cameraFocalPoint: Array<number>,

  /**
 * Whether to automatically call resetCamera() (default: true)
 *
 * When set to false, the user must explicitly provide camera
 * properties. Note that the initial resetCamera() call will
 * still occur upon component mount.
 */
  autoResetCamera: boolean,

  /**
   * Use parallel projection (default?: false;
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
   * List of picking listeners to bind. The supported values are `click` and `hover`. By default it is disabled (empty array).
   */
  pickingModes?: Array<'click' | 'hover' | 'select'>;

  /**
   * Read-only prop. To use this, make sure that `pickingModes` contains `click`.
   * This prop is updated when an element in the map is clicked. This contains
   * the picking info describing the object being clicked on.
   */
  clickInfo?: object;

  /**
   * Read-only prop. To use this, make sure that `pickingModes` contains `hover`.
   * This prop is updated when an element in the map is hovered. This contains
   * the picking info describing the object being hovered.
   */
  hoverInfo?: object;

  /**
   * List of representation to show
   */
  children?: Array<React.ReactNode> | React.ReactNode;


  /**
   * Show/Hide orientation axes.
   */
  showOrientationAxes?: boolean;


} & DashComponentProps;

