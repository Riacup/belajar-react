import React, { Component } from 'react';
import './App.css';
import './bootstrap.css';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -7.7742906, lng: 110.374724 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -7.7742906, lng: 110.374724 }} />}
  </GoogleMap>
))


class App extends Component {
  
  render() {
    return (
      <div>
        <div className="text-center">
            <br></br>
            <h1>Google Maps</h1>

            <br></br><br></br>
        </div>
        <div className="container">
            <div className="row">
            <div className="col-12">
                <div>
                <MyMapComponent
                isMarkerShown 
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDV9sv1TDNwOGQHfsrmOL_0DWTCA-M6Dgw&v=3.explibraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `500px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                />
                </div>
            </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
