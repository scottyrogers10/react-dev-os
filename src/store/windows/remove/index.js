export default ({ prevState }, id) => {
  const byId = { ...prevState.byId };
  const orderedIds = [...prevState.orderedIds].filter((orderedId) => orderedId !== id);
  delete byId[id];

  return { ...prevState, byId, orderedIds };
};
