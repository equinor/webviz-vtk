import React, { useContext } from 'react';

import { DataSetContext, FieldsContext } from './View';

/**
 * FieldData is exposing a FieldData to a downstream element
 */
export default function FieldData(props: FieldDataProps) {
  const dataset = useContext(DataSetContext)
  if (!dataset) {
    return null
  }
  return (
    <FieldsContext.Provider value={dataset.getFieldData()}>
      {props.children}
    </FieldsContext.Provider>

  );
}

type FieldDataProps = {

  children?: any;

}