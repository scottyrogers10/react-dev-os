export default (val, fn) => {
	if (val instanceof Error) return Promise.reject(val);

	if (val instanceof Promise) {
		return val.then((result) => {
			if (result?.__next) return fn(result);
			return result;
		});
	}

	return new Promise((resolve, reject) => {
		try {
			if (val?.__next) {
				resolve(fn(val));
			} else {
				resolve(val);
			}
		} catch (err) {
			reject(err);
		}
	});
};
