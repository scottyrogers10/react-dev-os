export default (byId) => {
  const nextFocusedUIWindow = Object.values(byId).reduce(
    (prevVal, currentVal) => {
      if (currentVal.renderIndex >= prevVal.renderIndex) {
        prevVal = currentVal;
      }

      return prevVal;
    },
    { renderIndex: 0 }
  );

  return nextFocusedUIWindow ? nextFocusedUIWindow.id : null;
};
