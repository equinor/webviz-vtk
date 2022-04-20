import React from 'react';
import PropTypes from 'prop-types';

import { GeometryRepresentation as VtkItem } from '../AsyncReactVTK';
import { DashComponentProps } from '../props';

/**
 * GeometryRepresentation is responsible to convert a vtkPolyData into rendering
 * It takes the following set of properties:
 *   - actor: Properties to assign to the vtkActor
 *   - mapper: Properties to assign to the vtkMapper
 *   - property: Properties to assign to the vtkProperty (actor.getProperty())
 *   - colorMapPreset: Name of the preset to use for controlling the color mapping
 *   - colorDataRange: Range to use for the color scale
 */
export default function GeometryRepresentation(props: GeometryRepresentationProps) {
  return <React.Suspense fallback={null}><VtkItem {...props} /></React.Suspense>;
};

GeometryRepresentation.defaultProps = {
  colorMapPreset: 'erdc_rainbow_bright',
  colorDataRange: [0, 1],
  showCubeAxes: false,
  showScalarBar: false,
  scalarBarTitle: '',
};

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

} & DashComponentProps;
