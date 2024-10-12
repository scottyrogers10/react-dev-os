import { useStore } from "#hooks";

export default () => {
	const windowIds = useStore((store) => store.getState("windows").ids, ["windows"]);

	return { state: { windowIds } };
};
