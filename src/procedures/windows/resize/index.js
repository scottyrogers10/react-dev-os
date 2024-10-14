import store from "#store";
import calculateResize from "./calculate-resize";

export default ({ dimensions, elem, event, id, shouldDispatch = false }) => {
	const window = store.getState("windows").byId[id];

	if (elem && window) {
		const { position, size } = calculateResize({ dimensions, shouldDispatch });
		elem.style.transform = `translate(${position.x}px, ${position.y}px)`;
		elem.style.height = `${size.height}px`;
		elem.style.width = `${size.width}px`;
		window.events.onResize(event, { position, size });

		shouldDispatch && store.dispatch("windows.update", { id, position, size });
	}
};
