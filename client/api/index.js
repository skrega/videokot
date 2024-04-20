import axios from 'axios'
import https from 'https'

const apiPath = process.env.NEXT_PUBLIC_API

const queryQueue = []

export function getCancelTokenSource() {
	return axios.CancelToken.source()
}

const api = ({ url, data = {}, method, headers = {}, cancelToken }) =>
	new Promise(async (resolve, reject) => {
		const appendData = {}
		if (data !== undefined)
			appendData[method === 'get' ? 'params' : 'data'] = data
		if (cancelToken) appendData.cancelToken = cancelToken

		let res = await axios({
			method: method || 'post',
			url: apiPath + '/api' + url,
			timeout: 100000,
			...appendData,
			headers,
			withCredentials: true,
			httpsAgent: new https.Agent({ rejectUnauthorized: false })
		})
			.then(resolve)
			.catch(reject)
	})

export default api
