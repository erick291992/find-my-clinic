import React, { useState, useEffect } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { FixedSizeList } from 'react-window';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Container from '@material-ui/core/Container';
import Clinic from '../components/Clinic'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
// import NavBar from '../components/NavBar';
import GoogleMapComponent from '../components/GoogleMapComponent';
import axios from 'axios'

const useStyles = makeStyles(theme => ({

	container: {
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(4),
		height: '100vh',
	},
	grid: {
		height: '100%',
	},

	gridList: {
		// padding: 0,
		// width: '100%',
		height: '100%',
    overflow: 'auto',
    // maxHeight: 100,
	},
	
	gridGoogleMap: {
		height: '100%',
	},

}));


export default function SimpleContainer() {
	const classes = useStyles();
	const [clinics, setClinics] = useState([]);
	const [userLocation, setUserLocation] = useState({ lat: -34.397, lng: 150.644 });


	useEffect(() => {
		getClinics()
		getGeoLocation()
	}, [])

	const getGeoLocation = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				position => {
					setUserLocation({
						lat: position.coords.latitude,
						lng: position.coords.longitude
					})
					console.log('userLocation', userLocation)
				}
			)
		} else {
			// setUserLocation({ lat: -34.397, lng: 150.644 })
		}
	}

	const getClinics = () => {
		const endPoint = "http://localhost:8000/api/clinics"
		const parameters = {
		}

		axios.get(endPoint + new URLSearchParams(parameters))
			.then(response => {
				console.log(typeof (response))
				console.log('response', response.data[0])
				// setClinics(response.data.splice(0,4))
				setClinics(response.data)
			})
			.catch(error => {
				console.log("ERROR!! " + error)
			})
	}
	return (
		<React.Fragment>
			{/* <CssBaseline /> */}
			<main>
				<Container className={classes.container} maxWidth="xl">
					{/* End hero unit */}
					<Grid className= {classes.grid} container spacing={4}>
						<Grid className={classes.gridList}  item xs={12} sm={12} md={7}>
							<List>
								{clinics.map((clinic) => {
									return (
										<ListItem alignItems="flex-start" key={clinic._id}>
											<Clinic clinic={clinic}></Clinic>
										</ListItem>
									)
								})}
								{/* <Clinic clinic= {clinics[0]}></Clinic> */}
							</List>
						</Grid>
						<Grid className= {classes.gridGoogleMap} item xs={12} sm={12} md={5}>
							<GoogleMapComponent isMarkerShown={false} userLocation={userLocation} clinics={clinics}></GoogleMapComponent>
						</Grid>
					</Grid>
				</Container>
			</main>
		</React.Fragment>
	);
}