export default ({ prevState }, id) => {
  const prevFocusedId = prevState.orderedIds.slice(-1)[0];
  const orderedIds =
    prevFocusedId !== id
      ? [...prevState.orderedIds].sort(function (a, b) {
          return a === id ? 1 : b === id ? -1 : 0;
        })
      : prevState.orderedIds;

  return { ...prevState, orderedIds };
};
