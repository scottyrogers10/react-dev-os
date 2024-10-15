export default (tools) => {
	return tools.map((tool) => {
		return {
			author: "",
			createdAt: "",
			description: "",
			hotKeys: [],
			icon: null,
			label: "",
			version: "0.0.0",
			window: {},
			...tool,
		};
	});
};
