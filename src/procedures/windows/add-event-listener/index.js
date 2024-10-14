import store from "#store";

export default (id, event) => {
	const { events } = store.getState("windows").byId[id];
	store.dispatch("windows.update", { id, events: { ...events, [event.type]: event.handler } });
};
