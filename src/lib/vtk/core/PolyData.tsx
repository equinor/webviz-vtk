import React, { useEffect, useRef, useContext } from 'react';

import { toTypedArray, smartEqualsShallow } from '../utils';

import usePreviousValue from '../usePreviousValue';
import {
    RepresentationContext,
    DownstreamContext,
    DataSetContext,
} from './View';

import vtkPolyData from '@kitware/vtk.js/Common/DataModel/PolyData.js';

/**
 * PolyData is exposing a vtkPolyData to a downstream filter
 * It takes the following set of properties:
 *   - points: [x, y, z, x, y, z, ...],
 *   - verts: [cellSize, pointId0, pointId1, ..., cellSize, pointId0, ...]
 *   - lines: [cellSize, pointId0, pointId1, ..., cellSize, pointId0, ...]
 *   - polys: [cellSize, pointId0, pointId1, ..., cellSize, pointId0, ...]
 *   - strips: [cellSize, pointId0, pointId1, ..., cellSize, pointId0, ...]
 * Cell connectivity helper property:
 *   - connectivity: 'manual', // [manual, points, triangles, strips]
 */


export default function PolyData(props: PolyDataProps) {
    const dataset = useRef(null);
    const representation = useContext(RepresentationContext)
    const downstream = useContext(DownstreamContext)
    const prevProps = usePreviousValue(props);

    useEffect(() => {
        if (!dataset.current) {
            let polydata = vtkPolyData.newInstance();
            dataset.current = polydata
        }
        return () => {
            dataset.current.delete()
            dataset.current = { polydata: null }
        }
    }, [])

    useEffect(() => {
        if (dataset.current) {
            update(props, prevProps)
        }

    }, [props])

    return (

        <DataSetContext.Provider value={dataset.current}>
            <div key={props.id} id={props.id}>
                {props.children}
            </div>
        </DataSetContext.Provider>

    )

    function update(props, previous?) {
        const { connectivity, points, verts, lines, polys, strips } = props;
        const polydata = dataset.current
        let changeDetected = false;
        let typedArray: any = Uint32Array;

        if (points && (!previous || !smartEqualsShallow(points, previous.points))) {
            const array = toTypedArray(points, Float64Array);
            polydata.getPoints().setData(array, 3);
            changeDetected = true;

            // Adapt cell size
            // Max cell size for uint16 is 655356*3=196608.
            // switch to uint32array if this is the case.
            typedArray = array.length > 196608 ? Uint32Array : Uint16Array;
        }

        if (verts && (!previous || !smartEqualsShallow(verts, previous.verts))) {
            polydata.getVerts().setData(toTypedArray(verts, typedArray));
            changeDetected = true;
        }

        if (lines && (!previous || !smartEqualsShallow(lines, previous.lines))) {
            polydata.getLines().setData(toTypedArray(lines, typedArray));
            changeDetected = true;
        }

        if (polys && (!previous || !smartEqualsShallow(polys, previous.polys))) {
            polydata.getPolys().setData(toTypedArray(polys, typedArray));
            changeDetected = true;
        }

        if (strips && (!previous || !smartEqualsShallow(strips, previous.strips))) {
            polydata.getStrips().setData(toTypedArray(strips, typedArray));
            changeDetected = true;
        }

        if (
            connectivity &&
            (!previous ||
                points?.length !== previous.points?.length ||
                connectivity !== previous.connectivity)
        ) {
            const nbPoints = points.length / 3;
            switch (connectivity) {
                case 'points':
                    {
                        const values = new Uint32Array(nbPoints + 1);
                        values[0] = nbPoints;
                        for (let i = 0; i < nbPoints; i++) {
                            values[i + 1] = i;
                        }
                        polydata.getVerts().setData(values);
                        changeDetected = true;
                    }
                    break;
                case 'triangles':
                    {
                        const values = new Uint32Array(nbPoints + nbPoints / 3);
                        let offset = 0;
                        for (let i = 0; i < nbPoints; i += 3) {
                            values[offset++] = 3;
                            values[offset++] = i + 0;
                            values[offset++] = i + 1;
                            values[offset++] = i + 2;
                        }
                        polydata.getPolys().setData(values);
                        changeDetected = true;
                    }
                    break;
                case 'strips':
                    {
                        const values = new Uint32Array(nbPoints + 1);
                        values[0] = nbPoints;
                        for (let i = 0; i < nbPoints; i++) {
                            values[i + 1] = i;
                        }
                        polydata.getStrips().setData(values);
                        changeDetected = true;
                    }
                    break;
                default:
                // do nothing for manual or anything else...
            }
        }

        if (changeDetected) {
            polydata.modified();
            downstream.setInputData(polydata, props.port);

            // Let the representation know that we have data
            if (representation && polydata.getPoints().getData().length) {
                representation.dataAvailable();
                representation.dataChanged();
            }
        }
    }

}

PolyData.defaultProps = {
    port: 0,
    points: [],
    connectivity: 'manual',
}

type PolyDataProps = {
    /**
     * Current color value
     */
    id?: string;

    /**
     * downstream connection port
     */
    port?: number;

    /**
     * xyz coordinates ([] | TypedArray | { bvals, dtype, shape })
     */
    points?: Array<number> | object | Float64Array | Float32Array;

    /**
     * verts cells
     */
    verts?: Array<number> | object | Uint8Array |
    Uint16Array | Uint32Array;

    /**
    * lines cells
    */
    lines?: Array<number> | object | Uint8Array | Uint16Array | Uint32Array;

    /**
    * polys cells
    */
    polys?: Array<number> | object | Uint8Array | Uint16Array | Uint32Array;

    /**
    * strips cells
    */
    strips?: Array<number> | object | Uint8Array | Uint16Array | Uint32Array;

    /**
     * Type of connectivity `manual` or implicit such as `points`, `triangles`, `strips`
     */
    connectivity?: string
    children?: any;
}
