import React, { Component } from 'react';
import './App.css';
import Main from './component/Main';
import Contact from './component/Contact';
import Profile from './component/Profile';
import Portofolio from './component/Portofolio';
import {link} from 'react-router-dom';

class App extends Component {
  render(){
    return (
      <div>
        <Link to="/main">Home</Link><br/>
        <Link to="/profile">Profile</Link><br/>
        <Link to="/portofolio">Portofolio</Link><br/>
        <Link to="/contact">Contact</Link><br/>
      </div>
    )
  }
}

export default App;
