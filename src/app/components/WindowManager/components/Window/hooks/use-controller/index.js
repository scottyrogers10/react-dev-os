import { useRef } from "react";
import { useStore } from "#hooks";
import store from "#store";

export default (id) => {
	const contentRef = useRef(null);
	const windowRef = useRef(null);
	const window = useStore((store) => store.getState("windows").byId[id], ["windows"]);

	const mouseDown = () => !window.isFocused && store.dispatch("windows.focus", id);

	return { handlers: { mouseDown }, refs: { content: contentRef, window: windowRef }, state: { window } };
};
