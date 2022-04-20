import { lazy } from 'react';

/**
 * fakeModules: We need to trick React.lazy into thinking we are 
 * giving the output of an import("my-module.js") Promise.
 */
const asyncComponentBuilder = name => async () => {
    // eslint-disable-next-line
    const AsyncReactVTK = import(/* webpackChunkName: "ReactVTK" */ './ReactVTK');
    const ReactVTK = await AsyncReactVTK;
    const reactComponent = ReactVTK.default[name];
    const fakeModule = { default: reactComponent };
    return fakeModule;
}

const Algorithm = lazy(asyncComponentBuilder("Algorithm"));
const CellData = lazy(asyncComponentBuilder("CellData"));
const DataArray = lazy(asyncComponentBuilder("DataArray"));
const FieldData = lazy(asyncComponentBuilder("FieldData"));
const GeometryRepresentation = lazy(asyncComponentBuilder("GeometryRepresentation"));
const PointData = lazy(asyncComponentBuilder("PointData"));
const PolyData = lazy(asyncComponentBuilder("PolyData"));
const View = lazy(asyncComponentBuilder("View"));

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