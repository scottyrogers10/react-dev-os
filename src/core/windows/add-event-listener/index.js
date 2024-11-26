import store from "#store";

export default (id, event) => {
	const { events } = store.getState("windows").byId[id];

	store.dispatch("windows.update", { events: { ...events, [event.type]: event.handler }, id });
};
