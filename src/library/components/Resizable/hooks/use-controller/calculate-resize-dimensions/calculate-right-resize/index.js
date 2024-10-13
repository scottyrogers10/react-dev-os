export default ({ elem, event, minSize }) => {
	const boundingRect = elem.getBoundingClientRect();
	const width = boundingRect.width + event.movementX;

	return {
		height: boundingRect.height,
		width: width >= minSize.width ? width : boundingRect.width,
		x: boundingRect.x,
		y: boundingRect.y,
	};
};
