export default ({ prevState }, id) => {
  const orderedIds = [...prevState.orderedIds].sort(function (a, b) {
    return a === id ? 1 : b === id ? -1 : 0;
  });

  return { ...prevState, orderedIds };
};
