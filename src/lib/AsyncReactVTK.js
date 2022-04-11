import React from 'react';

const Algorithm = React.lazy(() => import(/*webpackChunkName: "ReactVTK" */ './vtk/core/Algorithm'));
const CellData = React.lazy(() => import(/*webpackChunkName: "ReactVTK" */ "./vtk/core/CellData"));
const DataArray = React.lazy(() => import(/*webpackChunkName: "ReactVTK" */ "./vtk/core/DataArray"));
const FieldData = React.lazy(() => import(/*webpackChunkName: "ReactVTK" */ "./vtk/core/FieldData"));
const GeometryRepresentation = React.lazy(() => import(/*webpackChunkName: "ReactVTK" */ "./vtk/core/GeometryRepresentation"));
const PointData = React.lazy(() => import(/*webpackChunkName: "ReactVTK" */ "./vtk/core/PointData"));
const PolyData = React.lazy(() => import(/*webpackChunkName: "ReactVTK" */ "./vtk/core/PolyData"));
const View = React.lazy(() => import(/*webpackChunkName: "ReactVTK" */ "./vtk/core/View"));

export {
    Algorithm,
    CellData,
    DataArray,
    FieldData,
    GeometryRepresentation,
    PointData,
    PolyData,
    View,
};
