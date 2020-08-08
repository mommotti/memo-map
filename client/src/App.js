import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { listLogEntries, deleteLogEntry } from './API'
import LogEntryForm from './components/LogEntryForm'

const App = () => {

  const [logEntries, setLogEntries] = useState([])
  const [showPopup, setShowPopup] = useState({})
  const [addEntryLocation, setAddEntryLocation] = useState(null)
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 40.11,
    longitude: -100.99,
    zoom: 4
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
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      onViewportChange={setViewport}
      onDblClick={showAddMarkerPopup}
    >
      <div className="header">
        <div class="info_box">
          <i class="fa fa-info-circle">
            <div class="message">
              Double click/tap onto a location to add a new pin.📍
            </div>
          </i>
        </div>
        <div className="logo-wrapper">
          <h3 className="logo">memo-map</h3>
          <span className="matteo"> by Matteo Fenu</span>
        </div>
      </div>
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
                    <hr></hr>
                    <p>{entry.description}</p>
                    <hr></hr>
                    <small>Visited on: {new Date(entry.visitDate).toLocaleDateString()}</small>
                    <hr></hr>
                    {entry.image ? <img className="image" src={entry.image} alt={entry.title} /> : null}
                    <button className="delete" onClick={async () => {
                      await deleteLogEntry(entry._id)
                      setShowPopup({})
                      await getEntries()
                    }}>delete pin</button>
                  </div>
                </Popup>
              )
                : null
            }
          </React.Fragment >
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
                <svg className="pin add"
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