let currentId = 0;

const defaultPosition = {
	x: 24,
	y: 24,
};

const defaultSize = {
	height: 200,
	width: 300,
};

export default {
	create: (attrs = {}) => {
		const position = attrs.position || defaultPosition;
		const size = attrs.size || defaultSize;

		return {
			isOpaque: true,
			type: "",
			title: "",
			component: () => null,
			position,
			size,
			minSize: {
				height: 24,
				width: 95,
			},
			...attrs,
			events: {
				onMove: () => {},
				onResize: () => {},
			},
			id: (currentId += 1),
			isFocused: false,
			renderIndex: 0,
			contractSize: size,
			contractPosition: position,
		};
	},
};
