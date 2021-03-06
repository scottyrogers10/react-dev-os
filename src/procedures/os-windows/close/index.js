import store from "@store";
import getNextFocusedId from "./get-next-focused-id";

export default (id) => {
	const { byId } = store.dispatch("osWindows.remove", id);
	const nextFocusedId = getNextFocusedId(byId);

	nextFocusedId && store.dispatch("osWindows.focus", nextFocusedId);
};
