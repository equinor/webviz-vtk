import React from 'react';

import { DashComponentProps } from '../props';
import { FieldData as VtkItem } from '../AsyncReactVTK';

/**
 * FieldData is exposing a FieldData to a downstream element
 */
export default function FieldData(props: FieldDataProps) {
  return <React.Suspense fallback={null}><VtkItem {...props} /></React.Suspense>;
};

type FieldDataProps = {
  children?: any;
} & DashComponentProps;

