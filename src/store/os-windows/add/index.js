export default ({ prevState }, osWindow) => {
	const byId = { ...prevState.byId, [osWindow.id]: { ...osWindow } };
	const ids = [...prevState.ids, osWindow.id];

	return { ...prevState, byId, ids };
};
