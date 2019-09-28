import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './containers/Home'
import HomeContainer from './containers/HomeContainer.jsx'
import NavBar from './components/NavBar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({

	container: {
		// paddingTop: theme.spacing(4),
		// paddingBottom: theme.spacing(4),
		height: '100vh',
	},
}));

export default function App() {
	const classes = useStyles();

	return (
		<div>
			<NavBar></NavBar>
			<HomeContainer>
			</HomeContainer>
		</div>
	);
}
// class App extends Component {

// 	render() {
// 		const classes = useStyles();
// 		return (
// 			<div>
// 				<NavBar></NavBar>
// 				<HomeContainer>
// 				</HomeContainer>
// 			</div>
// 		);
// 	}
// }

// export default App;
