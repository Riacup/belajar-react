import React, { Component } from 'react';
import './App.css';
import './bootstrap.css';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import Button from '@material-ui/core/Button';
import Navbar from './NavbarMaterialize.js';
import Card from './RecipeReviewCard.js';


// const MyMapComponent = withScriptjs(withGoogleMap((props) =>
//   <GoogleMap
//     defaultZoom={8}
//     defaultCenter={{ lat: -7.7742906, lng: 110.374724 }}
//   >
//     {props.isMarkerShown && <Marker position={{ lat: -7.7742906, lng: 110.374724 }} />}
//   </GoogleMap>
// ))


class App extends Component {
  constructor(){
    super();
    this.state = {
      hotels : [
        {title : 'Hotel 1',date: '28 Januari 2019',description: 'Lorem ipsum sit dolor amet Lorem ipsum sit dolor amet Lorem ipsum sit dolor amet'},
        {title : 'Hotel 2',date: '21 Januari 2019',description: 'Lorem ipsum sit dolor amet Lorem ipsum sit dolor amet Lorem ipsum sit dolor amet'},
        {title : 'Hotel 3',date: '22 Januari 2018',description: 'Lorem ipsum sit dolor amet Lorem ipsum sit dolor amet Lorem ipsum sit dolor amet'},
        {title : 'Hotel 4',date: '10 Februari 2019',description: 'Lorem ipsum sit dolor amet Lorem ipsum sit dolor amet Lorem ipsum sit dolor amet'},
      ]
    };
  }
  
  render() {
    return (
      <div>
        {/* <div>
        <MyMapComponent
        isMarkerShown 
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCCIWY8PfPidEitFLloWMSv20DPx-4Ayow&v=3.explibraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `500px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        />
        </div> */}
          <Navbar/>
          <br></br>
          {this.state.hotels.map((data,key) => {
            return (
              <Card key={key} title={data.title} date={data.date} description={data.description}/>
            )
          })}
      </div>
    );
  }
}

export default App;
