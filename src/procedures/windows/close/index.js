import store from "@store";

export default (id) => {
  const windows = store.getState("windows");
  const [nextId] = windows.orderedIds.slice(-2, -1);

  store.dispatch("windows.remove", id);
  store.dispatch("windows.focus", nextId);
};
