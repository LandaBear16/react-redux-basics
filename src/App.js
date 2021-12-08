import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";

import Navbar from './components/Navbar'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default hot(module)(App);