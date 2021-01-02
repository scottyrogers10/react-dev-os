const bottom = ({ elem, event, minSize }) => {
	const height = elem.height + event.movementY;

	return {
		width: elem.width,
		height: height >= minSize.height ? height : elem.height,
		top: elem.top,
		left: elem.left,
	};
};

export default bottom;
