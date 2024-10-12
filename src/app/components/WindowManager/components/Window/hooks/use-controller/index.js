import { useStore } from "#hooks";

export default (id) => {
	const window = useStore((store) => store.getState("windows").byId[id], ["windows"]);

	return { state: { window } };
};
