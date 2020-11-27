export default ({ prevState }, id) => {
  const prevById = { ...prevState.byId };
  const prevFocusedId = prevState.focusedId;
  const prevFocusedOSWindow = prevById[prevFocusedId];

  const byId = { ...prevById };
  const maxRenderIndex = prevState.maxRenderIndex + 1;
  const nextFocusedOSWindow = prevById[id];

  prevFocusedOSWindow && (byId[prevFocusedId] = { ...prevFocusedOSWindow, isFocused: false });
  byId[id] = { ...nextFocusedOSWindow, isFocused: true, renderIndex: maxRenderIndex };

  return { ...prevState, byId, focusedId: id, maxRenderIndex };
};
