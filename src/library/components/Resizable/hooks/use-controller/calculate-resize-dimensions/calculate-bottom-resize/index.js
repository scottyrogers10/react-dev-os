export default ({ elem, event, minSize }) => {
	const boundingRect = elem.getBoundingClientRect();
	const height = boundingRect.height + event.movementY;

	return {
		height: height >= minSize.height ? height : boundingRect.height,
		width: boundingRect.width,
		x: boundingRect.x,
		y: boundingRect.y,
	};
};
