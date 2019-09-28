
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
						lat: position.coords.latitude,
						lng: position.coords.longitude
					})
				}
				, (error) => {
					// console.log('------')
					// console.log('error', error)
					reject(error)
					// resolve(userDefaultLocation)
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