export default {
	create: (attrs = {}) => {
		return {
			author: "",
			createdDate: "",
			description: "",
			hotKeys: [],
			icon: null,
			label: "",
			version: "0.0.0",
			window: {},
			...attrs,
		};
	},
};
