import { useStore } from "#hooks";

export default (id) => {
	const { isFocused, title } = useStore((store) => store.getState("windows").byId[id], ["windows"]);

	return { state: { isFocused, title } };
};
