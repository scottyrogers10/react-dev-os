export default ({ prevState }, updatedWindow) => {
  const prevById = prevState.byId;
  const prevWindow = prevById[updatedWindow.id];
  const byId = { ...prevById };

  byId[prevWindow.id] = { ...prevWindow, ...updatedWindow };

  return { ...prevState, byId };
};
