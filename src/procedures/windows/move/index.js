import store from "@store";
import calculateMove from "./calculateMove";

export default ({ elem, event, id, shouldDispatch = false }) => {
  const window = store.getState("windows").byId[id];

  if (window) {
    const position = calculateMove({ elem, event, window });
    elem.style.transform = `translate(${position.x}px, ${position.y}px)`;
    window.events.onMove(event);

    shouldDispatch && store.dispatch("windows.update", { id, position });
  }

  event.stopPropagation();
  event.preventDefault();
};
