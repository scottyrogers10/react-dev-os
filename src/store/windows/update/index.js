export default ({ prevState }, updatedWindow) => {
  const byId = { ...prevState.byId };
  const prevWindow = byId[updatedWindow.id];

  byId[updatedWindow.id] = { ...prevWindow, ...updatedWindow };

  return { ...prevState, byId };
};
