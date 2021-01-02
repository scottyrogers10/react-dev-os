import store from "@store";
import calculateResize from "./calculate-resize";

export default ({ dimensions, elem, event, id, shouldDispatch = false }) => {
	const osWindow = store.getState("osWindows").byId[id];

	if (elem && osWindow) {
		const { position, size } = calculateResize(dimensions, shouldDispatch);
		elem.style.transform = `translate(${position.x}px, ${position.y}px)`;
		elem.style.height = `${size.height}px`;
		elem.style.width = `${size.width}px`;
		osWindow.events.onResize({ position, size }, event);

		shouldDispatch && store.dispatch("osWindows.update", { id, position, size });
	}
};
