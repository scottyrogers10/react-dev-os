export default ({ prevState }, id) => {
  const prevById = { ...prevState.byId };
  const prevFocusedId = prevState.focusedId;
  const prevFocusedUIWindow = prevById[prevFocusedId];

  const byId = { ...prevById };
  const maxRenderIndex = prevState.maxRenderIndex + 1;
  const nextFocusedUIWindow = prevById[id];

  prevFocusedUIWindow && (byId[prevFocusedId] = { ...prevFocusedUIWindow, isFocused: false });
  byId[id] = { ...nextFocusedUIWindow, isFocused: true, renderIndex: maxRenderIndex };

  return { ...prevState, byId, focusedId: id, maxRenderIndex };
};
