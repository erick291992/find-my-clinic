import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Map from './components/Map'
// import axios from 'axios'
import AlignItemsList from './ListClinic/ListClinic'
// import NavBar from './components/NavBar'
import Home from './containers/Home'
import HomeContainer from './containers/HomeContainer.jsx'
import NavBar from './components/NavBar';

class App extends Component {

	render() {
		return (
			<div>
				<NavBar></NavBar>
				<HomeContainer>
				</HomeContainer>
			</div>
		);
	}
}

export default App;
