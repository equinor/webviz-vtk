import React from 'react';

import { DataArray as VtkItem } from '../AsyncReactVTK';
import { DashComponentProps } from '../props';
/**
 * DataArray is creating a vtkDataArray for the container fields
 * It takes the following set of properties:
 *   - type: 'Float32Array', 'Float64Array', 'Uint16Array', ...
 *   - values: [number, number, ...]
 *   - numberOfComponents: 1,
 *   - registration: 'addArray', 'setScalars', ...
 */
export default function DataArray(props: DataArrayProps) {
  return <React.Suspense fallback={null}><VtkItem {...props} /></React.Suspense>;
};

type DataArrayProps = {
  /**
   * Current color value
   */
  id?: string;

  /**
   * Typed array name
   */
  type?: string;

  /**
   * Field name
   */
  name?: string;

  /**
   * Actual values to use inside our array
   */
  values?: Array<number>;

  /**
   * Number of components / Tuple size
   */
  numberOfComponents?: number;

  /**
   * Name of the method to call on the fieldData (addArray, setScalars, setVectors...)
   */
  registration?: string;

} & DashComponentProps;

DataArray.defaultProps = {
  name: 'scalars',
  type: 'Float32Array',
  values: [],
  numberOfComponents: 1,
  registration: 'addArray',
};
