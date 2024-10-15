import { useStore } from "#hooks";
import buildTools from "./build-tools";

export default (tools) => {
	const { isBrowserOpen } = useStore((store) => store.getState("tools"), ["tools"]);

	return { state: { isBrowserOpen, tools: buildTools(tools) } };
};
