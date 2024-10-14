import { useStore } from "#hooks";
import buildDevOSContext from "./build-dev-os-context";

export default (id) => {
	const devOS = buildDevOSContext();
	const window = useStore((store) => store.getState("windows").byId[id], ["windows"]);

	const inlineStyles = {
		root: { pointerEvents: window.isFocused ? "auto" : "none" },
	};

	return { devOS, inlineStyles, state: { window } };
};
