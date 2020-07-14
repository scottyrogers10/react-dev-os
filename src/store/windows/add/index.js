export default ({ prevState }, window) => {
  const byId = { ...prevState.byId, [window.id]: { ...window } };
  const ids = [...prevState.ids, window.id];

  return { ...prevState, byId, ids };
};
