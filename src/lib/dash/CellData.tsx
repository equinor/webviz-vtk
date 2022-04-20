import React from 'react';

import { CellData as VtkItem } from '../AsyncReactVTK';
import { DashComponentProps } from '../props';
/**
 * CellData is exposing a vtkCellData to a downstream element
 */

const CellData = (props: CellDataProps) => (
  <React.Suspense fallback={null}><VtkItem {...props} /></React.Suspense>
)

type CellDataProps = {
  children?: any;
} & DashComponentProps;

export default CellData