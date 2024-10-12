import store from "#store";

export default (id) => {
	const { minSize } = store.getState("windows").byId[id];
	store.dispatch("windows.update", { id, size: minSize });
};
