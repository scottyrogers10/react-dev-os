import bindings from "./bindings";

export default (value) => {
	let bindFn = (val, fn) => fn(val);

	const getPipe = (val) => {
		return {
			bind: (fn) => {
				bindFn = typeof fn === "string" ? bindings[fn] : fn;
				return getPipe(val);
			},
			flow: (fn) => getPipe(bindFn(val, fn)),
			run: (fn) => (fn ? fn(val) : val),
			runAsync: () => val,
		};
	};

	return getPipe(value);
};
