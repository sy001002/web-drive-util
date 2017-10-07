const { URL } = require('url')
const ENGINES = {
	http: require('http'),
	https: require('https'),
}

/**
 * @return {Promise}
 */
function getData(res) {
	return new Promise((resolve, reject) => {
		let data = ''

		res.on('data', chunk => data += chunk.toString())
		res.on('end', () => resolve(data))
		res.on('error', err => reject(err))
	})
}

/**
 * @param {string} url
 * @param {object} opts
 * @param {object} opts.headers
 * @param {number} opts.timeout - Default to 30000
 * @return {Promise <res>}
 */
function request(url, opts) {
	return new Promise((resolve, reject) => {
		opts = opts || {}
		const Url = new URL(url)
		const engine = ENGINES[(/^([a-z]+):?/).exec(Url.protocol)[1]]

		let port = parseInt(Url.port)
		if( isNaN(port) )
			port = undefined

		const req = engine.get({
			...{
				hostname: Url.hostname,
				port,
				path: Url.pathname + Url.search,
				timeout: 30000,
			},
			...opts,
		}, res => {
			res.ok = res.statusCode >= 200 && res.statusCode < 400
			const textPromise = getData(res)
			res.text = () => textPromise
			resolve(res)
		})

		req.on('error', err => {
			reject(err)
		})
	})
}

module.exports = request
