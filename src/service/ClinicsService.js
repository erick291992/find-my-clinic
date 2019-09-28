import axios from 'axios'

const getClinics = () => {
	const endPoint = "http://localhost:8000/api/clinics"

	return new Promise(function(resolve, reject) {
		axios.get(endPoint)
			.then(response => {
				resolve(response.data)
			})
			.catch(error => {
				reject(error)
			})
	})
}

export default {
	getClinics,
}