export default ({ prevState }) => {
  return { ...prevState, byId: {}, focusedId: null, ids: [], maxRenderIndex: 0 };
};
