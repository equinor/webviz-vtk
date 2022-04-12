import React from 'react';

// List classes that we want to have available
// => this is required because of tree shacking

import(/*webpackChunkName: "ReactVTKClasses" */  '@kitware/vtk.js/Rendering/OpenGL/Profiles/Volume');
import(/*webpackChunkName: "ReactVTKClasses" */  '@kitware/vtk.js/Rendering/OpenGL/Profiles/Geometry');
import(/*webpackChunkName: "ReactVTKClasses" */  '@kitware/vtk.js/Rendering/OpenGL/Profiles/Glyph');

// // Data access helper
import(/*webpackChunkName: "ReactVTKClasses" */  '@kitware/vtk.js/IO/Core/DataAccessHelper/HttpDataAccessHelper');
import(/*webpackChunkName: "ReactVTKClasses" */  '@kitware/vtk.js/IO/Core/DataAccessHelper/JSZipDataAccessHelper');

// Sources
import(/*webpackChunkName: "ReactVTKClasses" */ '@kitware/vtk.js/Filters/Sources/ConcentricCylinderSource.js')
import(/*webpackChunkName: "ReactVTKClasses" */ '@kitware/vtk.js/Filters/Sources/ConeSource.js')
import(/*webpackChunkName: "ReactVTKClasses" */ '@kitware/vtk.js/Filters/Sources/CubeSource.js')
import(/*webpackChunkName: "ReactVTKClasses" */ '@kitware/vtk.js/Filters/Sources/CylinderSource.js')
import(/*webpackChunkName: "ReactVTKClasses" */ '@kitware/vtk.js/Filters/Sources/LineSource.js')
import(/*webpackChunkName: "ReactVTKClasses" */ '@kitware/vtk.js/Filters/Sources/PlaneSource.js')
import(/*webpackChunkName: "ReactVTKClasses" */ '@kitware/vtk.js/Filters/Sources/PointSource.js')
import(/*webpackChunkName: "ReactVTKClasses" */ '@kitware/vtk.js/Filters/Sources/SphereSource.js')

// // Filters
import(/*webpackChunkName: "ReactVTKClasses" */  '@kitware/vtk.js/Filters/Core/Cutter.js');
import(/*webpackChunkName: "ReactVTKClasses" */  '@kitware/vtk.js/Filters/General/WarpScalar.js');
import(/*webpackChunkName: "ReactVTKClasses" */  '@kitware/vtk.js/Filters/General/TubeFilter.js');

// Readers
import(/*webpackChunkName: "ReactVTKClasses" */  '@kitware/vtk.js/IO/Geometry/PLYReader.js');
import(/*webpackChunkName: "ReactVTKClasses" */  '@kitware/vtk.js/IO/Geometry/STLReader.js');
import(/*webpackChunkName: "ReactVTKClasses" */  '@kitware/vtk.js/IO/Misc/ElevationReader.js');
import(/*webpackChunkName: "ReactVTKClasses" */  '@kitware/vtk.js/IO/Misc/OBJReader.js');

// import '@kitware/vtk.js/IO/Misc/PDBReader.js';

// import '@kitware/vtk.js/IO/XML/XMLImageDataReader.js';

import(/*webpackChunkName: "ReactVTKClasses" */ '@kitware/vtk.js/IO/XML/XMLPolyDataReader.js');


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
