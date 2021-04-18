import serializeTool from "./tool";

const serializeTools = (tools = []) => {
	return tools?.map((tool) => serializeTool(tool)) || [];
};

export default serializeTools;
