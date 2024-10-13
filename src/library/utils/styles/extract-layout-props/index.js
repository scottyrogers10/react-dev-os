export default (props = {}) => {
	const {
		align,
		display,
		flex,
		flexDirection,
		justify,
		m,
		mb,
		ml,
		mr,
		mt,
		mx,
		my,
		p,
		pb,
		pl,
		pr,
		pt,
		px,
		py,
		...rest
	} = props;

	const spacingProps = {
		align,
		display,
		flex,
		flexDirection,
		justify,
		m,
		mb,
		ml,
		mr,
		mt,
		mx,
		my,
		p,
		pb,
		pl,
		pr,
		pt,
		px,
		py,
	};

	return {
		layoutProps: Object.entries(spacingProps).reduce((prevVal, [key, value]) => {
			if (spacingProps[key] !== undefined) prevVal[key] = value;
			return prevVal;
		}, {}),
		rest,
	};
};
