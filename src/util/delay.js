/**
 * @param {number} timeout
 * @param {any} rejectReason
 * @return {Promise}
 */
function delay(timeout, rejectReason) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if( rejectReason )
				return reject(rejectReason)
			else
				return resolve()
		}, timeout)
	})
}

module.exports = delay
