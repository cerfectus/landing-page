import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import BodyLayout from "./components/BodyLayout"

import Navbar from "./components/Navbar"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <BodyLayout></BodyLayout>
      </div>
    );
  }
}

export default App;
