import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import Profile from './Profile';
import Contact from './Contact';
import Portofolio from './Portofolio';



class Main extends Component {

    render(){
        return(
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route exact path="/main" component={Main}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/portofolio" component={Portofolio}/>
                
            </Switch>
        );
    }
}

export default Main;
