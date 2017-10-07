/**
 * @typedef {object} result
 * @property {string} url
 * @property {string} filename
 * @property {string} cookie
 * @property {string} range
 */

/**
 * @param {string} url
 * @param {string} filename
 * @param {string} cookie
 * @param {string} range
 * @return {result}
 */
function makeResult(url, filename, cookie, range) {
	return {
		url,
		filename,
		cookie,
		range,
	}
}

module.exports = makeResult
