import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { listLogEntries } from './API'
const App = () => {
  const [logEntries, setLogEntries] = useState([])
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 40.11,
    longitude: -100.99,
    zoom: 4
  });

  useEffect(() => { //loads only once
    (async () => {
      const logEntries = await listLogEntries()
      setLogEntries(logEntries)
      console.log(logEntries)
    })()
  }, [])

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      onViewportChange={setViewport}
      mapStyle="mapbox://styles/mapbox/dark-v10"
    >
      {
        logEntries.map(entry => (
          <Marker
            key={entry._id}
            latitude={entry.latitude}
            longitude={entry.longitude}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <div>{entry.title}</div>
          </Marker>
        ))
      }
    </ReactMapGL>
  );
}

export default App