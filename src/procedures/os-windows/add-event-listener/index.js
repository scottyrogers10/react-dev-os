import store from "@store";

export default (id, event) => {
	const { events } = store.getState("osWindows").byId[id];
	store.dispatch("osWindows.update", { id, events: { ...events, [event.name]: event.handler } });
};
