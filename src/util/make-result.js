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
 * @param {boolean} hasRange
 * @return {result}
 */
function makeResult(url, filename, cookie, hasRange) {
	return {
		url,
		filename,
		cookie,
		range: hasRange ? 'bytes' : null,
	}
}

module.exports = makeResult
