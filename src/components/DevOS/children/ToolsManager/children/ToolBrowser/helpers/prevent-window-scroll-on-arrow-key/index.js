const ARROW_DOWN = 40;
const ARROW_UP = 38;

export default (event) => {
	const keyCode = event.keyCode;

	if (keyCode === ARROW_DOWN || keyCode === ARROW_UP) {
		event.stopPropagation();
		event.preventDefault();
	}
};
