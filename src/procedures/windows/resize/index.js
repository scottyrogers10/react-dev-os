import store from "@store";
import calculateResize from "./calculateResize";

export default (dimensions, id) => {
  const window = store.getState("windows").byId[id];

  if (window) {
    const { position, size } = calculateResize({ dimensions, window });
    store.dispatch("windows.update", { id, position, size });
  }
};
