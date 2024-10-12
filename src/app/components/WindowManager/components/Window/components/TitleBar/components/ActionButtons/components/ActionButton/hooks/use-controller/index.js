export default (onClick) => {
	const doubleClick = (event) => event.stopPropagation();

	return { handlers: { click: onClick, doubleClick } };
};
