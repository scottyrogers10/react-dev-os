export default ({ prevState }, id) => {
	const prevById = { ...prevState.byId };
	const prevFocusedId = prevState.focusedId;
	const prevFocusedWindow = prevById[prevFocusedId];

	const byId = { ...prevById };
	const maxRenderIndex = prevState.maxRenderIndex + 1;
	const nextFocusedWindow = prevById[id];

	prevFocusedWindow && (byId[prevFocusedId] = { ...prevFocusedWindow, isFocused: false });
	byId[id] = { ...nextFocusedWindow, isFocused: true, renderIndex: maxRenderIndex };

	return { ...prevState, byId, focusedId: id, maxRenderIndex };
};
