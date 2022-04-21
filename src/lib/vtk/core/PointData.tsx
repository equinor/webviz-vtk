import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { DataSetContext, FieldsContext } from './View';

/**
 * PointData is exposing a vtkPointData to a downstream element
 */
export default function PointData(props: PointDataProps) {
    const dataset = useContext(DataSetContext)
    if (!dataset) {
        return null
    }
    return (
        <FieldsContext.Provider value={dataset.getPointData()}>
            {props.children}
        </FieldsContext.Provider>

    );
}

PointData.defaultProps = {};
type PointDataProps = {

    children?: any;

}
