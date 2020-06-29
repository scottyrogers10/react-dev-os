export default ({ prevState }, window) => {
  const byId = { ...prevState.byId };
  const orderedIds = [...prevState.orderedIds];

  byId[window.id] = window;
  orderedIds.push(window.id);

  return { ...prevState, byId, orderedIds };
};
