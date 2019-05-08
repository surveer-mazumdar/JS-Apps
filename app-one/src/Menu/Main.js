import React, { Component } from "react";
import {
  Route,
  HashRouter
} from "react-router-dom";

import NavBar from '../Navigation/Nav';
import Home from "../Pages/Home-Menu/Home";
import Stuff from "../Pages/Stuff-Menu/Stuff";
import Contact from "../Pages/Contact-Menu/Contact";
import Activities from "../Pages/Activity-Menu/Activities"
import Photos from "../Pages/Photos/Photos";

class Main extends Component {
    render() {
      return (
        <HashRouter>
          <div className="container">
            <div className="col-lg-12 col-md-12 col-sd-4">
              <NavBar />
            </div>
            
            <div className="col-lg-12 col-md-12 col-sd-8">
                <Route exact path="/" component={Home}/>
                <Route path="/stuff" component={Stuff}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/activities" component={Activities}/>
                <Route path="/photos" component={Photos}/>
            </div>
          </div>
        </HashRouter>
      );
    }
  }

  export default Main;