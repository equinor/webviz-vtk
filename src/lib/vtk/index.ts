// Ensure vtk.js classes available for Algorithm and Reader
import './AvailableClasses';

// Get React pieces
import Core from './core/index';


import {
    ViewContext,
    RepresentationContext,
    DataSetContext,
    FieldsContext,
    DownstreamContext,
} from './core/View';

// Core



export const PointData = Core.PointData;
export const PolyData = Core.PolyData;


export const View = Core.View;
export const GeometryRepresentation = Core.GeometryRepresentation;



export const DataArray = Core.DataArray;
export const FieldData = Core.FieldData;
export const Algorithm = Core.Algorithm;

export const CellData = Core.CellData;

// Context
export const Contexts = {
    ViewContext,
    RepresentationContext,
    DataSetContext,
    FieldsContext,
    DownstreamContext,
};

export default {
    Core,

    Contexts,
};