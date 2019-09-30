
const userDefaultLocation = () => {
	return {
		lat: 40.7292159,
		lng: -73.9954494
	}
}

const getUserLocation = () => {

	return new Promise(function(resolve, reject) {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				position => {
					resolve({
						lat: parseFloat(position.coords.latitude),
						lng: parseFloat(position.coords.longitude),
					})
				}
				, (error) => {
					// console.log('------')
					// console.log('error', error)
					let location = { lat: parseFloat(-34.397), lng: parseFloat(150.644) };
					// reject(error)
					resolve(location);
				});
		} else {
			console.log('no geo')
			resolve(userDefaultLocation)
		}
	})
}

export default {
	getUserLocation,
	userDefaultLocation,
}