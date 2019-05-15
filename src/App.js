import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Map from './Map/Map'
// import axios from 'axios'
import AlignItemsList from './ListClinic/ListClinic'

class App extends Component {

  render() {
    return (
      <div>
        <h1>hello</h1>
        <div>
          <div className="floatleft">
            <Map/>
          </div>
          <div className="floatright">
            <AlignItemsList/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
