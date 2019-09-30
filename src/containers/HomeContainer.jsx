import React, { useState, useEffect } from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Container from '@material-ui/core/Container';
import Clinic from '../components/Clinic'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
// import NavBar from '../components/NavBar';
import GoogleMapComponent from '../components/GoogleMapComponent';
import clinicsService from '../service/ClinicsService';
import userGeo from '../util/userGeo';

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
	// const [userLocation, setUserLocation] = useState({ lat: -34.397, lng: 150.644 });
	const [userLocation, setUserLocation] = useState(userGeo.userDefaultLocation);
	const [page, setPage] = useState(1);
	const [isLoading, setIsLoading] = useState(true);

	const loadMoreData = () => {
		setPage(page + 1);
	};

	useEffect(() => {
		// getClinics()
		// getGeoLocation()
		// getClinics()
		// start()

		Promise.all([userGeo.getUserLocation(), clinicsService.getClinics()])
			.then(([currentLocation, resClinics]) => {
				// console.log('currentLocation', currentLocation)
				// console.log('resClinics', resClinics)
				setUserLocation(currentLocation)
				setClinics(resClinics)
				setIsLoading(false);
				console.log('currentLocation', currentLocation)
				console.log('resClinics', resClinics)
			});
	}, [page])

	// const start = () => {
	// 	clinicsService.getClinics()
	// 		.then(response => {
	// 			// tempClinic = response
	// 			setClinics(response)
	// 			console.log('step 1', response)
	// 			return userGeo.getUserLocation()
	// 			// return response
	// 		})
	// 		.then((currentLocation) => {
	// 			console.log('step 3', currentLocation)
	// 			setUserLocation(currentLocation)
	// 		})
	// 		.catch(error => {
	// 			console.log('err', error)
	// 			// setUserLocation(userGeo.userDefaultLocation)
	// 		})
	// }

	// const getGeoLocation = () => {
	// 	userGeo.getUserLocation()
	// 		// .then((currentLocation) => {
	// 		// 	console.log('currentLocation', currentLocation)
	// 		// 	setUserLocation(currentLocation)
	// 		// })
	// 		// .catch(error => {
	// 		// 	console.log('err', error)
	// 		// 	setUserLocation(userGeo.userDefaultLocation)
	// 		// })
	// }

	// const getClinics = () => {
	// 	clinicsService.getClinics()
	// 		// .then(response => {
	// 		// 	setClinics(response)
	// 		// })
	// 		// .catch(error => {
	// 		// 	console.log('err', error)
	// 		// })
	// }

	return (
		<React.Fragment>
			{/* <CssBaseline /> */}
			<main>
				<Container className={classes.container} maxWidth="xl">
					{/* End hero unit */}
					<Grid className={classes.grid} container spacing={4}>
						<Grid className={classes.gridList} item xs={12} sm={12} md={7}>
							<List>
								{clinics.map((clinic) => {
									return (
										<ListItem alignItems="flex-start" key={clinic._id}>
											<Clinic clinic={clinic}></Clinic>
										</ListItem>
									)
								})}
							</List>
						</Grid>
						<Grid className={classes.gridGoogleMap} item xs={12} sm={12} md={5}>
							<GoogleMapComponent isMarkerShown={false} userLocation={userLocation} clinics={clinics}></GoogleMapComponent>
						</Grid>
					</Grid>
				</Container>
			</main>
		</React.Fragment>
	);
}