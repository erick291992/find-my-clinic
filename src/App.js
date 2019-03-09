import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './Map/Map'
// import axios from 'axios'

class App extends Component {

  render() {
    return (
       <div>
         <h1>hello</h1>
         <section className="container">
          <div className="App">
            <Map/>
          </div>
        </section>
       </div>
    );
  }
}

export default App;
