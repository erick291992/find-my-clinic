import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Home from './containers/Home'
import HomeContainer from './containers/HomeContainer.jsx'
import NavBar from './components/NavBar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({

	container: {
		// paddingTop: theme.spacing(4),
		// paddingBottom: theme.spacing(4),
		height: '100vh',
	},
	navBar: {
		// paddingTop: theme.spacing(4),
		// paddingBottom: theme.spacing(4),
		height: 64,
	},
	subContainer: {
		height: '100vh',
	}
}));

export default function App() {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<div className={classes.navBar}>
				<NavBar></NavBar>
			</div>
			<div className={classes.subContainer}>
				<HomeContainer></HomeContainer>
			</div>
			{/* <HomeContainer></HomeContainer> */}
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
