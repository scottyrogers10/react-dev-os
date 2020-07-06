export default (store) => {
  const dispatch = store.dispatch.bind(store);

  store.dispatch = (actionString, args) => {
    const result = dispatch(actionString, args);
    // localStorage.setItem
    // console.log(actionString, args)
    return result;
  };

  return store;
};
