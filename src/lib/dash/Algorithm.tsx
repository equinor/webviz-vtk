import React from 'react';

import { Algorithm as VtkItem } from '../AsyncReactVTK';
import { DashComponentProps } from '../props';

/**
 * Algorithm is exposing a source or filter to a downstream filter
 * It takes the following set of properties:
 *   - vtkClass: vtkClassName
 *   - state: {}
 */
const Algorithm = (props: AlgorithmProps) => (
  <React.Suspense fallback={null}><VtkItem {...props} /></React.Suspense>
)

Algorithm.defaultProps = {
  port: 0,
  vtkClass: 'vtkConeSource',
  state: {},
};



type AlgorithmProps = {
  /**
     * The ID used to identify this component.
     */
  id?: string;

  /**
   * downstream connection port
   */
  port?: number;

  /**
   * vtkClass name
   */
  vtkClass?: string;

  /**
   * set of property values for vtkClass
   */
  state?: object;

  children?: any;

} & DashComponentProps;

export default Algorithm