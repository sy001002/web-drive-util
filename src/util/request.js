const { URL } = require('url')
const ENGINES = {
	http: require('http'),
	https: require('https'),
}

/**
 * @param {string} url
 * @param {object} opts
 * @param {string} opts.method - Default to 'GET'
 * @param {object} opts.headers
 * @param {number} opts.timeout - Default to 30000
 * @return {Promise <res>}
 */
function request(url, opts) {
	return new Promise((resolve, reject) => {
		const Url = new URL(url)
		const engine = ENGINES[Url.protocol]

		const req = engine.request({
			...{
				hostname: Url.hostname,
				port: parseInt(Url.port),
				path: Url.pathname + Url.search,
				timeout: 30000,
			},
			...opts,
		}, res => resolve(res))

		req.on('error', err => {
			reject(err)
		})
	})
}

module.exports = request
