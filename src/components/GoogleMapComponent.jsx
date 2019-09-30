import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import Card from '@material-ui/core/Card';

const MyMapComponent = compose(
	withProps({
		googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBXvxO5-tdTcujv7Ke3t-1LeDhAdRNqtYM',
		loadingElement: <div style={{ height: `100%` }} />,
		containerElement: <div style={{ height: `100%` }} />,
		mapElement: <div style={{ height: `100%` }} />,
	}),
	withScriptjs,
	withGoogleMap
)((props) =>
	<GoogleMap
		defaultZoom={8}
		defaultCenter={{ lat: parseFloat(props.userLocation.lat), lng: parseFloat(props.userLocation.lng) }}
	>
		{(props.clinics.map(clinic => {
			// console.log('my clinic', clinic)
			return (
				<Marker
					key={clinic._id}
					position={clinic.location}
					onClick={props.onMarkerClick}
				/>
			);
		}))}
	</GoogleMap >
)



const useStyles = makeStyles(theme => ({
	card: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
}));

export default function GoogleMapComponent(props) {

	const classes = useStyles();
	const [isMarkerShown, setMarkerShown] = useState(props.isMarkerShown);
	// const [clinics] = useState([props.clinics]);
	// const [clinics] = useState([{ _id:1, location:{ lat: -34.397, lng: 150.644 } }]);


	useEffect(() => {
		delayedShowMarker()
	})

	const delayedShowMarker = () => {
		setTimeout(() => {
			setMarkerShown(true)
			// props.isMarkerShown = true
		}, 3000)
	}

	const handleMarkerClick = () => {
		setMarkerShown(false)
		// props.isMarkerShown = false
		delayedShowMarker()
	}

	return (
		<Card className={classes.card}>
			<MyMapComponent
				isMarkerShown={isMarkerShown}
				onMarkerClick={handleMarkerClick}
				userLocation={props.userLocation}
				clinics={props.clinics}
			/>
		</Card>

	);
}