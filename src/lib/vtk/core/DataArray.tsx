import React, { useRef, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

import { toTypedArray } from '../utils';

import { DataSetContext, FieldsContext } from './View';
import vtkDataArray from '@kitware/vtk.js/Common/Core/DataArray.js';
import { TYPED_ARRAYS } from '@kitware/vtk.js/macros.js';

/**
 * DataArray is creating a vtkDataArray for the container fields
 * It takes the following set of properties:
 *   - type: 'Float32Array', 'Float64Array', 'Uint16Array', ...
 *   - values: [number, number, ...]
 *   - numberOfComponents: 1,
 *   - registration: 'addArray', 'setScalars', ...
 */

export default function DataArray(props: DataArrayProps) {
  const context = useRef(null);
  const dataset = useContext(DataSetContext)
  const fields = useContext(FieldsContext)

  useEffect(() => {
    if (!context.current) {
      let array = vtkDataArray.newInstance({ name: 'scalars', empty: true });
      fields[props.registration](array)
      context.current = { array }
    }
    return () => {
      fields.removeArray(context.current.array)
      context.current.array.delete()
      context.current = {}
    }
  }, [])

  useEffect(() => {
    const { array } = context.current
    array.setName(props.name)
    dataset.modified()
  }, [props.name])

  useEffect(() => {
    const klass = TYPED_ARRAYS[props.type];
    const { array } = context.current
    array.setData(toTypedArray(props.values, klass), props.numberOfComponents)
    dataset.modified()
  }, [props.values, props.type, props.numberOfComponents])

  // @ts-ignore
  return <div key={props.id} name={props.name} />;



}


DataArray.defaultProps = {
  name: 'scalars',
  type: 'Float32Array',
  values: [],
  numberOfComponents: 1,
  registration: 'addArray',
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
  values?: Array<number> | object | Float64Array |
  Float32Array |
  Int32Array |
  Int16Array |
  Int8Array |
  Uint32Array |
  Uint16Array |
  Uint8Array;

  /**
   * Number of components / Tuple size
   */
  numberOfComponents?: number;

  /**
   * Name of the method to call on the fieldData (addArray, setScalars, setVectors...)
   */
  registration?: string;

}