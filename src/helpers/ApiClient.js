function callApi(endpoint, params = {}, method) {
  return fetch(endpoint, {
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		},
		// body: params,
		method: method
  })
  .then(response => response.json());
}

export default {
	get: (endpoint, params) => callApi(endpoint, params, 'GET'),
	post: (endpoint, params) => callApi(endpoint, params, 'POST'),
	put: (endpoint, params) => callApi(endpoint, params, 'PUT'),
	patch: (endpoint, params) => callApi(endpoint, params, 'PATCH'),
	delete: (endpoint, params) => callApi(endpoint, params, 'DELETE')
};
