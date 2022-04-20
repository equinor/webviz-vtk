import React from 'react';
import PropTypes from 'prop-types';

import { PolyData as VtkItem } from '../AsyncReactVTK';
import { DashComponentProps } from '../props';
/**
 * PolyData is exposing a vtkPolyData to a downstream filter
 * It takes the following set of properties:
 *   - points: [x, y, z, x, y, z, ...],
 *   - verts: [cellSize, pointId0, pointId1, ..., cellSize, pointId0, ...]
 *   - lines: [cellSize, pointId0, pointId1, ..., cellSize, pointId0, ...]
 *   - polys: [cellSize, pointId0, pointId1, ..., cellSize, pointId0, ...]
 *   - strips: [cellSize, pointId0, pointId1, ..., cellSize, pointId0, ...]
 * Cell connectivity helper property:
 *   - connectivity: 'manual', // [manual, points, triangles, strips]
 */
export default function PolyData(props: PolyDataProps) {
  return <React.Suspense fallback={null}><VtkItem {...props} /></React.Suspense>;
};

PolyData.defaultProps = {
  port: 0,
  points: [],
  connectivity: 'manual',
};

type PolyDataProps = {
  /**
   * Current color value
   */
  id?: string;

  /**
   * downstream connection port
   */
  port?: number;

  /**
   * xyz coordinates
   */
  points?: Array<number>;

  /**
   * verts cells
   */
  verts?: Array<number>;

  /**
   * lines cells
   */
  lines?: Array<number>;

  /**
   * polys cells
   */
  polys?: Array<number>;

  /**
   * strips cells
   */
  strips?: Array<number>;

  /**
   * Type of connectivity `manual` or implicit such as `points`, `triangles`, `strips`
   */
  connectivity?: string,

  children?: Array<React.ReactNode> | React.ReactNode;

} & DashComponentProps;
