import React from 'react';
import { View, GeometryRepresentation, PolyData, DataArray, CellData } from '../lib/index'

const { scalar, points, polys } = require('./data/geogrid.json');

function App() {

  return (
    <>
      <View  >
        <GeometryRepresentation
          mapper={{
            colorByArrayName: 'scalar',
          }}
          actor={{
            scale: [1, 1, 5]
          }}
          colorDataRange={[0, 0.4]}

        >
          <PolyData
            points={points}
            polys={polys}
          >
            <CellData>
              <DataArray
                name="scalar"
                registration="setScalars"
                values={scalar}
              />
            </CellData>
          </PolyData>
        </GeometryRepresentation>
      </View>

    </>
  );
}

export default App;
