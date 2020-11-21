export default ({ prevState }, uiWindow) => {
  const byId = { ...prevState.byId, [uiWindow.id]: { ...uiWindow } };
  const ids = [...prevState.ids, uiWindow.id];

  return { ...prevState, byId, ids };
};
