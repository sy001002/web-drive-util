/**
 * @typedef {object} result
 * @property {string} url - original url
 * @property {string} currUrl - current url
 * @property {object} requestHeaders
 * @property {object} headers
 * @property {number} statusCode
 * @property {string} message
 */

/**
 * @param {object} res
 * @param {string} url - original url
 * @param {string} currUrl - current url
 * @param {object} requestHeaders
 * @param {string} message
 * @return {result}
 */
function makeError(res, url, currUrl, requestHeaders, message) {
	return {
		url,
		currUrl,
		requestHeaders,
		headers: res.headers,
		statusCode: res.statusCode,
		message,
	}
}

module.exports = makeError
