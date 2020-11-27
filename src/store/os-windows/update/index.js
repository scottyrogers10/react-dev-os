export default ({ prevState }, updatedOSWindow) => {
  const prevById = prevState.byId;
  const prevOSWindow = prevById[updatedOSWindow.id];
  const byId = { ...prevById };

  byId[prevOSWindow.id] = { ...prevOSWindow, ...updatedOSWindow };

  return { ...prevState, byId };
};
