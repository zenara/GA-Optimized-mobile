/**
 * @author Chathurika Senani
 * @create date 2021-10-11 19:56:49
 * @modify date 2021-10-11 21:28:59
 */

 export default class Http {
	constructor(baseUrl, headers = {}) {
		this.baseUrl = baseUrl;

		this.headers = headers;
	}


	addHeader = (name, value) => {
		this.headers[name] = value;
	};

	jsonPost = (action, payload, token) => (new Promise((resolve, reject) => {
		fetch(this.baseUrl + action, {
			method: 'POST',
			credentials: 'include',
//			credentials: 'same-origin',
			body: JSON.stringify(payload),
			headers: {
				...this.headers,

				Accept: 'application/json',
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`,
			}
		})
			.then(response => {
				console.log("1 jsonPost ",response);
				switch (response.status) {
					case 404:
						reject({ code: response.status, error: 'Oh no! Content not found.' });
						break;

					case 401:
						reject({ code: response.status, error: 'Unauthorized' });
						break;

					case 403:
						reject({ code: response.status, error: 'Access Forbidden' });
						break;

					case 500:
						reject({ code: response.status, error: 'Oops! Something went wong' });
						break;

					default:
						// Expects a JSON
						return response.json();
				}
			})
			.then(responseJson => {
				if (0 === responseJson.Status) {
					resolve(responseJson.Data);
				} else {
					reject({ code: responseJson.Status, error: responseJson.Error });
				}
			})
			.catch(exception => {
				console.log("3 jsonPost ",exception);
				if (exception.toString() === 'TypeError: Network request failed') {
					reject({ code: 0, error: 'No Internet Connection.' });
				} else {
					reject({ code: 0, error: exception.toString() });
				}
			});
	}));
	
	jsonGet = (action, token) => (new Promise((resolve, reject) => {
		fetch(this.baseUrl + action, {
			method: 'GET',
			credentials: 'include',
//			credentials: 'same-origin',
			headers: {...this.headers,

				Accept: 'application/json',
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`,}
		})
		.then(response => {
			console.log("1 jsonPost ",response);
			switch (response.status) {
				case 404:
					reject({ code: response.status, error: 'Oh no! Content not found.' });
					break;

				case 401:
					reject({ code: response.status, error: 'Unauthorized' });
					break;

				case 403:
					reject({ code: response.status, error: 'Access Forbidden' });
					break;

				case 500:
					reject({ code: response.status, error: 'Oops! Something went wong' });
					break;

				default:
					// console.log('Get default', response);
					// Expects a JSON
					return response.json();
			}
		})
		.then(responseJson => {
			console.log("2 jsonGet ",responseJson);
			if (true === responseJson.status) {
				resolve(responseJson.data);
			} else {
				reject({ code: responseJson.status, error: responseJson.error });
			}
		})
		.catch(exception => {
			console.log("3 jsonGet ",exception);
			if (exception.toString() === 'TypeError: Network request failed') {
				reject({ code: 0, error: 'No Internet Connection.' });
			} else {
				reject({ code: 0, error: exception.toString() });
			}
		});
	}));

	
	jsonDelete = (action, token) => (new Promise((resolve, reject) => {
		fetch(this.baseUrl + action, {
			method: 'DELETE',
			credentials: 'include',
//			credentials: 'same-origin',
			headers: {...this.headers,

				Accept: 'application/json',
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`,}
		})
		.then(response => {
			switch (response.status) {
				case 404:
					reject({ code: response.status, error: 'Oh no! Content not found.' });
					break;

				case 401:
					reject({ code: response.status, error: 'Unauthorized' });
					break;

				case 403:
					reject({ code: response.status, error: 'Access Forbidden' });
					break;

				case 500:
					reject({ code: response.status, error: 'Oops! Something went wong' });
					break;

				default:
					// console.log('Delete default', response);
					// Expects a JSON
					return response.json();
			}
		})
		.then(responseJson => {
			console.log("2 jsonDelete ",responseJson);
			if (0 === responseJson.Status) {
				resolve(responseJson.Data);
			} else {
				reject({ code: responseJson.Status, error: responseJson.Error });
			}
		})
		.catch(exception => {
			console.log("3 jsonDelete ",exception);
			if (exception.toString() === 'TypeError: Network request failed') {
				reject({ code: 0, error: 'No Internet Connection.' });
			} else {
				reject({ code: 0, error: exception.toString() });
			}
		});
	}));


	/**
	 * NOTE: Do NOT add "Content-Type: multipart/form-data" to headers
	 */
	formMultiPartPost = (action, payload, token) => (new Promise((resolve, reject) => {
		const _formData = new FormData();

		for (let k in payload) {
			_formData.append(k, payload[k]);
			console.log('inside', 'k ', k, 'payload[k] ', payload[k], '\n');
		}

		fetch(this.baseUrl + action, {
			method: 'POST',
			credentials: 'include',
//			credentials: 'same-origin',
			processData: false,
			headers: {
				...this.headers,
				Accept: 'application/json',
				'Authorization': `Bearer ${token}`,

			},
			body: payload,
		})
		.then(response => {
			// console.log("1 multipart payload ",JSON.stringify(_formData));
			switch (response.status) {
				case 404:
					reject({ code: response.status, error: 'Oh no! Content not found.' });
					break;

				case 401:
					reject({ code: response.status, error: 'Unauthorized' });
					break;

				case 403:
					reject({ code: response.status, error: 'Access Forbidden' });
					break;

				case 500:
					reject({ code: response.status, error: 'Oops! Something went wong' });
					break;

				default:
					console.log('multipart default', response);
					// Expects a JSON
					return response.json();
			}
		})
		.then(responseJson => {
			console.log("2 multipart ",responseJson);
			if (0 === responseJson.Status) {
				resolve(responseJson.Data);
			} else {
				reject({ code: responseJson.Status, error: responseJson.Error });
			}
		})
		.catch(exception => {
			console.log("3 multipart ",exception);
			if (exception.toString() === 'TypeError: Network request failed') {
				reject({ code: 0, error: 'No Internet Connection.' });
			} else {
				reject({ code: 0, error: exception.toString() });
			}
		});
	}));

	formPost = (action, payload, timeout) => (new Promise((resolve, reject) => {
		const _formData = Object.keys(payload).map((key) => (
			key + '=' + encodeURIComponent(payload[key])
		)).join('&');

		setTimeout(() => {
			reject({ code: 0, error: 'Request timed out.' });
		}, timeout * 1000);

		fetch(this.baseUrl + action, {
			method: 'POST',
			credentials: 'include',
//			credentials: 'same-origin',
			headers: {
				...this.headers,

				Accept: 'application/json',
				'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
			},
			body: _formData
		})
			.then(response => {
				switch (response.status) {
					case 404:
						reject({ code: response.status, error: 'Oh no! Content not found.' });
						break;

					case 401:
						reject({ code: response.status, error: 'Unauthorized' });
						break;

					case 403:
						reject({ code: response.status, error: 'Access Forbidden' });
						break;

					case 500:
						reject({ code: response.status, error: 'Oops! Something went wong' });
						break;

					default:
						// Expects a JSON
						return response.json();
				}
			})
			.then(responseJson => {
				if (true === responseJson.success) {
					resolve(responseJson);
				}

				reject({ code: responseJson.code, error: responseJson.error });
			})
			.catch(exception => {
				reject({ code: 0, error: exception.toString() });
			});
	}));
	/**
	 * NOTE: `Content-Disposition` not available in cross-domain; so need to hard-code
	 */
	downloadFile = (action, payload, method = 'POST') => (new Promise((resolve, reject) => {
		let httpResponse = null;

		fetch(this.baseUrl + action, {
			method: method,
			credentials: 'include',
//			credentials: 'same-origin',
			body: JSON.stringify(payload),
			headers: {
				...this.headers,

				'Content-Type': 'application/json'
			}
		})
			.then(response => {
				switch (response.status) {
					case 404:
						reject({ code: response.status, error: 'Oh no! Content not found.' });
						break;

					case 401:
						reject({ code: response.status, error: 'Unauthorized' });
						break;

					case 403:
						reject({ code: response.status, error: 'Access Forbidden' });
						break;

					case 500:
						reject({ code: response.status, error: 'Oops! Something went wong' });
						break;

					default:
						httpResponse = response;

						// Expects a binary
						return response.blob();
				}
			})
			.then(responseBlob => {
//				const filename = 'filename.ext';
				const filename = httpResponse.headers.get('Content-Disposition').split('filename=')[1];
				const a = document.createElement('a');

				a.href = window.URL.createObjectURL(responseBlob);
				a.download = filename;
				document.body.appendChild(a);
				a.click();
			})
			.catch(exception => {
				reject({ code: 0, error: exception.toString() });
			});
	}));
}
