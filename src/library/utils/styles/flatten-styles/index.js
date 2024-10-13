const flatten = (arr = []) => {
	if (arr.length === 0) return arr;

	if (Array.isArray(arr[0])) return flatten(arr[0]).concat(flatten(arr.slice(1)));

	return [arr[0]].concat(flatten(arr.slice(1)));
};

export default (style) => {
	if (style && Object.keys(style).length > 0) {
		return Array.isArray(style) ? flatten(style).filter((obj) => obj && Object.keys(obj).length > 0) : [style];
	}

	return [];
};
