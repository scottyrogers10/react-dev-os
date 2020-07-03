import store from "@store";
import calculateMove from "./calculateMove";

export default (event, id) => {
  const window = store.getState("windows").byId[id];

  if (window) {
    const position = calculateMove({ event, window });
    store.dispatch("windows.update", { id, position });
    window.events.onMove(event);
  }

  event.stopPropagation();
  event.preventDefault();
};
