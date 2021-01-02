import store from "@store";

export default () => {
	const isToolBrowserOpen = store.getState("toolBrowser").isOpen;
	const { focusedId, ids } = store.getState("osWindows");

	if (!isToolBrowserOpen && ids.length > 0) {
		const currentIndex = ids.indexOf(focusedId);
		const nextIndex = currentIndex + 1;

		if (nextIndex <= ids.length - 1) {
			const nextId = ids[nextIndex];
			store.dispatch("osWindows.focus", nextId);
		} else {
			const firstId = ids[0];
			store.dispatch("osWindows.focus", firstId);
		}
	}
};
