import { useStore } from "#hooks";

export default (id) => {
	const { isFocused, isOpaque, title } = useStore((store) => store.getState("windows").byId[id], ["windows"]);
	const doubleClick = () => store.dispatch("windows.update", { id, isOpaque: !isOpaque });

	return { handlers: { doubleClick }, state: { isFocused, title } };
};
