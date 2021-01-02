const right = ({ elem, event, minSize }) => {
	const width = elem.width + event.movementX;

	return {
		width: width >= minSize.width ? width : elem.width,
		height: elem.height,
		top: elem.top,
		left: elem.left,
	};
};

export default right;
