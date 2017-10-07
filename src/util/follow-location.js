const request = require('./request')
const delay = require('./delay')

/**
 * @param {string} url
 * @param {object} opts
 * @param {string} opts.method - Default to 'GET'
 * @param {object} opts.headers
 * @param {number} opts.timeout - Default to 30000
 * @param {number} opts.requestDelay - Default to 3000
 * @return {Promise <res>}
 */
async function followLocation(url, opts) {
	opts.requestDelay = opts.requestDelay || 3000

	while( true ) {
		const res = await request(url, opts)
		if( res.headers.location ) {
			res.destroy()
			url = res.headers.location
			await delay(opts.requestDelay)
		} else {
			return res
		}
	}
}

module.exports = followLocation
