import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { DataSetContext, FieldsContext } from './View';

/**
 * PointData is exposing a vtkPointData to a downstream element
 */
export default function PointData(props) {
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

PointData.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};
