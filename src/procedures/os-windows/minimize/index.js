import store from "@store";

export default (id) => {
  const { minSize } = store.getState("osWindows").byId[id];
  store.dispatch("osWindows.update", { id, size: minSize });
};
