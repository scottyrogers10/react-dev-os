import store from "#store";

let currentId = 0;

export default (attrs = {}) => {
	const position = attrs.position || { x: 24, y: 24 };
	const size = attrs.size || { height: 200, width: 300 };

	const window = {
		component: () => null,
		contractPosition: position,
		contractSize: size,
		events: { onMove: () => {}, onResize: () => {} },
		id: (currentId += 1),
		isFocused: false,
		isOpaque: true,
		minSize: { height: 30, width: 95 },
		position,
		renderIndex: 0,
		size,
		title: "",
		type: "",
		...attrs,
	};

	store.dispatch("windows.add", window);
	store.dispatch("windows.focus", window.id);
};
