export default ({ prevState }, updatedUIWindow) => {
  const prevById = prevState.byId;
  const prevUIWindow = prevById[updatedUIWindow.id];
  const byId = { ...prevById };

  byId[prevUIWindow.id] = { ...prevUIWindow, ...updatedUIWindow };

  return { ...prevState, byId };
};
