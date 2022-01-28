import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";

import Navbar from './components/Navbar'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from './components/Home'

function BlogPost() {
  let { slug } = useParams();
  return <div>Now showing post {slug}</div>;
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' render={(props) => <About {...props} />}/>
            <Route exact path='/blog' component={BlogPost}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default hot(module)(App);

function About(props) {
  console.log(props)
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}