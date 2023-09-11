import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { listLogEntries } from './API'
import LogEntryForm from './components/LogEntryForm'
const App = () => {
  const [logEntries, setLogEntries] = useState([])
  const [showPopup, setShowPopup] = useState({})
  const [addEntryLocation, setAddEntryLocation] = useState(null)

  const [viewport, setViewport] = React.useState({
    width: '100vw',
    height: '100vh',
    latitude: 37.7577, // Initial latitude
    longitude: -122.4376, // Initial longitude
    zoom: 10, // Initial zoom level
    maxBounds: [
      // Define the maximum bounds for panning
      [43.6523, 11.7871], // Southwest corner of the bounding box
      [42.3498, 13.3995], // Northeast corner of the bounding box
    ],
  });
  const getEntries = async () => {
    const logEntries = await listLogEntries()
    setLogEntries(logEntries)
  }

  useEffect(() => { //loads only once
    (async () => {
      getEntries()
    })()
  }, [])
useEffect(() => {
    navigator.geolocation.getCurrentPosition(pos => {
      setViewport({
        ...viewport,
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude
      });
    });
  }, []);
  const showAddMarkerPopup = (event) => {
    const [longitude, latitude] = event.lngLat
    setAddEntryLocation({
      latitude,
      longitude
    })
  }

  return (
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/mommotti/clmf8e3uv01h201r7db52186u"
      // mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapboxApiAccessToken="pk.eyJ1IjoibW9tbW90dGkiLCJhIjoiY2s4bzZiZWduMDU5ajNsbWYzODI5dDczdCJ9.XDeVCGyJTetl96idm7MPww"
      onViewportChange={setViewport}
      onDblClick={showAddMarkerPopup}
    >
      {
        logEntries.map(entry => (
          <React.Fragment key={entry._id}>
            <Marker
              key={entry._id}
              latitude={entry.latitude}
              longitude={entry.longitude}
            >
              <div
                onClick={() => setShowPopup({
                  [entry._id]: true,
                })}
              >
                <svg className="pin yellow"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
            </Marker>
            {
              showPopup[entry._id] ? (
                <Popup
                  latitude={entry.latitude}
                  longitude={entry.longitude}
                  closeButton={true}
                  closeOnClick={false}
                  dynamicPosition={true}
                  onClose={() => setShowPopup({})}
                  anchor="top" >
                  <div className="popup">
                    <h3>{entry.title}</h3>
                    <h5>{entry.description}</h5>
                    <p>{entry.comments}</p>
                    {entry.image ? <img src={entry.image} alt={entry.title} /> : null}
                  </div>
                </Popup>
              )
                : null
            }
          </React.Fragment>
        ))
      }
      {
        addEntryLocation ? (
          <>
            <Marker
              latitude={addEntryLocation.latitude}
              longitude={addEntryLocation.longitude}
            >
              <div
              >
                <svg className="pin red"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
            </Marker>
            <Popup
              latitude={addEntryLocation.latitude}
              longitude={addEntryLocation.longitude}
              closeButton={true}
              closeOnClick={false}
              dynamicPosition={true}
              onClose={() => setAddEntryLocation(null)}
              anchor="top" >
              <div className="popup">
                <LogEntryForm
                  onClose={() => {
                    setAddEntryLocation(null)
                    getEntries()
                  }}
                  location={addEntryLocation}
                />
              </div>
            </Popup>
          </>
        )
          : null
      }
    </ReactMapGL >
  );
}

export default App