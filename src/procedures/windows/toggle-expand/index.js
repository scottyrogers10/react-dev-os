import store from "#store";

const DOCUMENT_ELEMENT = window.document.documentElement;

export default (id) => {
	const { contractPosition, contractSize, position, size } = store.getState("windows").byId[id];
	const height = DOCUMENT_ELEMENT.clientHeight;
	const width = DOCUMENT_ELEMENT.clientWidth;

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
