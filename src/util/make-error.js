/**
 * @typedef {object} result
 * @property {string} url - original url
 * @property {string} currUrl - current url
 * @property {object} headers
 * @property {number} statusCode
 * @property {string} body
 * @property {string} message
 */

/**
 * @param {object} res
 * @param {string} url - original url
 * @param {string} currUrl - current url
 * @param {string} message
 * @return {result}
 */
async function makeError(res, url, currUrl, message) {
	return {
		url,
		currUrl,
		headers: res.headers,
		statusCode: res.statusCode,
		body: await res.text(),
		message,
	}
}

module.exports = makeError
