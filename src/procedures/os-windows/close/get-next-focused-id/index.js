export default (byId) => {
  const nextFocusedOSWindow = Object.values(byId).reduce(
    (prevVal, currentVal) => {
      if (currentVal.renderIndex >= prevVal.renderIndex) {
        prevVal = currentVal;
      }

      return prevVal;
    },
    { renderIndex: 0 }
  );

  return nextFocusedOSWindow ? nextFocusedOSWindow.id : null;
};
