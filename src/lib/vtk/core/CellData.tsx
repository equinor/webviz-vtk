import React, { useContext, useEffect } from 'react';

import { DataSetContext, FieldsContext } from './View';

/**
 * CellData is exposing a vtkCellData to a downstream element
 */
export default function CellData(props: CellDataProps) {
  const dataset = useContext(DataSetContext)
  if (dataset) {
    return (

      <FieldsContext.Provider value={dataset.getCellData()}>
        {props.children}
      </FieldsContext.Provider>
    )
  }
  return <div>No provider!</div>

}

CellData.defaultProps = {};

type CellDataProps = {

  children?: any;

}