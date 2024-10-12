export default ({ prevState }, id) => {
	const prevById = prevState.byId;
	const ids = [...prevState.ids].filter((windowId) => windowId !== id);
	const byId = Object.values(prevById).reduce((prevVal, currentVal) => {
		currentVal.id !== id && (prevVal[currentVal.id] = currentVal);
		return prevVal;
	}, {});

	return { ...prevState, byId, ids };
};
