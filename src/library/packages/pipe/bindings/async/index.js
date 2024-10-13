export default (val, fn) => {
	if (val instanceof Error) return Promise.reject(val);

	if (val instanceof Promise) return val.then((result) => fn(result));

	return new Promise((resolve, reject) => {
		try {
			resolve(fn(val));
		} catch (err) {
			reject(err);
		}
	});
};
