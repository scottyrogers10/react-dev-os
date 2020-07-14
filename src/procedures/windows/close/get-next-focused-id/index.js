export default (byId) => {
  const nextFocusedWindow = Object.values(byId).reduce(
    (prevVal, currentVal) => {
      if (currentVal.renderIndex >= prevVal.renderIndex) {
        prevVal = currentVal;
      }

      return prevVal;
    },
    { renderIndex: 0 }
  );

  return nextFocusedWindow ? nextFocusedWindow.id : null;
};
