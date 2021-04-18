const serializeTool = (tool = {}) => {
	return {
		author: tool?.author || "",
		createdDate: tool?.createdDate || "",
		description: tool?.description || "",
		hotKeys: tool?.hotKeys || [],
		icon: tool?.icon || null,
		label: tool?.label || "",
		version: tool?.version || "0.0.0",
		window: tool?.window /* TODO: serialize window with ToolWindow serializer */,
	};
};

export default serializeTool;
