import React, { useState, useEffect } from 'react';
import ReactMapGL from 'react-map-gl';
import { listLogEntries } from './API'
const App = () => {
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 40.11,
    longitude: -100.99,
    zoom: 4
  });
  useEffect(() => {
    (async () => {
      const logEntries = await listLogEntries()
      console.log(logEntries)
    })()
  }, [])

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      onViewportChange={setViewport}
      mapStyle="mapbox://styles/mapbox/dark-v10"
    />
  );
}

export default App