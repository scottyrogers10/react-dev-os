import store from "@store";
import calculateMove from "./calculate-move";

export default ({ elem, event, id, shouldDispatch = false }) => {
  const window = store.getState("windows").byId[id];

  if (elem && window) {
    const position = calculateMove({ elem, event, window });
    elem.style.transform = `translate(${position.x}px, ${position.y}px)`;
    window.events.onMove({ position }, event);

    shouldDispatch && store.dispatch("windows.update", { id, position });
  }
};
