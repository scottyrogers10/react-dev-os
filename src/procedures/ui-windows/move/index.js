import store from "@store";
import calculateMove from "./calculate-move";

export default ({ elem, event, id, shouldDispatch = false }) => {
  const uiWindow = store.getState("uiWindows").byId[id];

  if (elem && uiWindow) {
    const position = calculateMove({ elem, event, uiWindow });
    elem.style.transform = `translate(${position.x}px, ${position.y}px)`;
    uiWindow.events.onMove({ position }, event);

    shouldDispatch && store.dispatch("uiWindows.update", { id, position });
  }
};
