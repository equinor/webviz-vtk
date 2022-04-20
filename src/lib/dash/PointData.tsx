import React from 'react';
import { DashComponentProps } from '../props';
import { PointData as VtkItem } from '../AsyncReactVTK';

/**
 * PointData is exposing a vtkPointData to a downstream element
 */
export default function PointData(props: PointDataProps) {
  return <React.Suspense fallback={null}><VtkItem {...props} /></React.Suspense>;
};

type PointDataProps = {
  children?: any;
} & DashComponentProps;
