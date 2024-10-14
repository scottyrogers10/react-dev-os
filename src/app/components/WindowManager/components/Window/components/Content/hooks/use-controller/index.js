import { useStore } from "#hooks";

export default (id) => {
	const window = useStore((store) => store.getState("windows").byId[id], ["windows"]);

	const inlineStyles = {
		root: { pointerEvents: window.isFocused ? "auto" : "none" },
	};

	return { inlineStyles, state: { window } };
};
