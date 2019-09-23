import React, { Component } from 'react';
// import axios from 'axios'

class Map extends Component {

	constructor(props) {
		super(props)
		this.state = {
			venues: []
		}
	}

	componentDidMount() {
		this.getVenues()
		this.renderMap()
	}

	renderMap = () => {
		loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyBXvxO5-tdTcujv7Ke3t-1LeDhAdRNqtYM&callback=initMap")
		window.initMap = this.initMap
	}

	getVenues = () => {
		// const endPoint = "https://api.foursquare.com/v2/venues/explore?"
		// const parameters = {
		//   client_id: "PMHC2WA1VCBHVYOPPSJ0QSBYTLRF4PNJ04OWVWV0PZJ0QFIR",
		//   client_secret: "CULSZZ44YAEBOWBFGPB4BF5ISRXXSNYR0EE3JV3CNE2ZWHV0",
		//   query: "food",
		//   near: "Sydney",
		//   v: "20182507"
		// }

		// axios.get(endPoint + new URLSearchParams(parameters))
		//   .then(response => {
		//     this.setState({
		//       venues: response.data.response.groups[0].items
		//     }, this.renderMap())
		//   })
		//   .catch(error => {
		//     console.log("ERROR!! " + error)
		//   })

		let data = [
			{
				"name": "AABANY Pro-bono Legal Clinic (WALK-IN)",
				"runBy": "The Asian American Bar Association of New York (AABANY)",
				"address": "Chinese Chamber of Commerce of New York, 3 Bowery, New York, NY 10002",
				"phone": [
					""
				],
				"email": "",
				"hoursUrl": "",
				"operatingHours": [
					"2nd Wednesday of the month,\n6:30pm - 8:30pm"
				],
				"mattersCovered": [],
				"languages": [
					"English",
					"Mandarin"
				],
				"instructions": "Those needing legal assistance should bring all documents pertaining to their legal issues to the clinic location, no earlier than 6:00 PM on the given day.",
				"sourceWebsite": "https://www.aabany.org/page/648",
				"verified": true,
				"location": {
					"lat": 40.666088,
					"lng": -73.611580
				}
			},
		]
		this.setState({
			venues: data
		})

	}

	initMap = () => {
		console.log("saaaaa")
		// Create A Map
		var map = new window.google.maps.Map(document.getElementById('map'), {
			center: { lat: 40.666088, lng: -73.611580 },
			zoom: 8
		})

		// Create An InfoWindow
		var infowindow = new window.google.maps.InfoWindow()

		// Display Dynamic Markers
		console.log("aaaa")
		this.state.venues.map(myVenue => {
			console.log(myVenue)
			var contentString = `${myVenue.name}`

			// Create A Marker
			var marker = new window.google.maps.Marker({
				position: { lat: myVenue.location.lat, lng: myVenue.location.lng },
				map: map,
				title: myVenue.name
			})

			// Click on A Marker!
			marker.addListener('click', function() {

				// Change the content
				infowindow.setContent(contentString)

				// Open An InfoWindow
				infowindow.open(map, marker)
			})
			return marker
		})
	}

	render() {
		return (
			<div id="map"></div>
		);
	}
}

function loadScript(url) {
	var index = window.document.getElementsByTagName("script")[0]
	var script = window.document.createElement("script")
	script.src = url
	script.async = true
	script.defer = true
	index.parentNode.insertBefore(script, index)
}

export default Map;
