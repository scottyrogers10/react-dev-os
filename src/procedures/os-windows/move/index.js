import store from "@store";
import calculateMove from "./calculate-move";

export default ({ elem, event, id, shouldDispatch = false }) => {
	const osWindow = store.getState("osWindows").byId[id];

	if (elem && osWindow) {
		const position = calculateMove({ elem, event, osWindow });
		elem.style.transform = `translate(${position.x}px, ${position.y}px)`;
		osWindow.events.onMove({ position }, event);

		shouldDispatch && store.dispatch("osWindows.update", { id, position });
	}
};
