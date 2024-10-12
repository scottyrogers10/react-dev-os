import store from "#store";

const BODY = document.body;
const WINDOW = window;

export default (id) => {
	const { contractPosition, contractSize, position, size } = store.getState("windows").byId[id];

	const hasVerticalScrollBar = BODY.clientWidth < WINDOW.innerWidth;
	const hasHorizontalScrollBar = BODY.clientHeight < WINDOW.innerHeight;

	const height = hasHorizontalScrollBar
		? WINDOW.innerHeight - (WINDOW.innerHeight - BODY.clientHeight)
		: WINDOW.innerHeight;

	const width = hasVerticalScrollBar ? WINDOW.innerWidth - (WINDOW.innerWidth - BODY.clientWidth) : WINDOW.innerWidth;

	const isExpanded = size.height === height && size.width === width && position.x === 0 && position.y === 0;

	isExpanded
		? store.dispatch("windows.update", { id, position: contractPosition, size: contractSize })
		: store.dispatch("windows.update", {
				contractPosition: position,
				contractSize: size,
				id,
				position: { x: 0, y: 0 },
				size: { height, width },
		  });
};
