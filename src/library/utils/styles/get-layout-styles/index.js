const layoutStylesMap = {
	align: (val) => ({ alignItems: val }),
	display: (val) => ({ display: val }),
	flex: (val) => ({ flex: val }),
	flexDirection: (val) => ({ flexDirection: val }),
	justify: (val) => ({ justifyContent: val }),
	m: (val) => ({ margin: `${val}px` }),
	mb: (val) => ({ marginBottom: `${val}px` }),
	ml: (val) => ({ marginLeft: `${val}px` }),
	mr: (val) => ({ marginRight: `${val}px` }),
	mt: (val) => ({ marginTop: `${val}px` }),
	mx: (val) => ({ marginLeft: `${val}px`, marginRight: `${val}px` }),
	my: (val) => ({ marginBottom: `${val}px`, marginTop: `${val}px` }),
	p: (val) => ({ padding: `${val}px` }),
	pb: (val) => ({ paddingBottom: `${val}px` }),
	pl: (val) => ({ paddingLeft: `${val}px` }),
	pr: (val) => ({ paddingRight: `${val}px` }),
	pt: (val) => ({ paddingTop: `${val}px` }),
	px: (val) => ({ paddingLeft: `${val}px`, paddingRight: `${val}px` }),
	py: (val) => ({ paddingBottom: `${val}px`, paddingTop: `${val}px` }),
};

export default (layoutProps = {}) => {
	return Object.entries(layoutProps).reduce((prevVal, [key, value]) => {
		return { ...prevVal, ...layoutStylesMap[key](value) };
	}, {});
};
