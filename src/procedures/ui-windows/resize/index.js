import store from "@store";
import calculateResize from "./calculate-resize";

export default ({ dimensions, elem, event, id, shouldDispatch = false }) => {
  const uiWindow = store.getState("uiWindows").byId[id];

  if (elem && uiWindow) {
    const { position, size } = calculateResize(dimensions, shouldDispatch);
    elem.style.transform = `translate(${position.x}px, ${position.y}px)`;
    elem.style.height = `${size.height}px`;
    elem.style.width = `${size.width}px`;
    uiWindow.events.onResize({ position, size }, event);

    shouldDispatch && store.dispatch("uiWindows.update", { id, position, size });
  }
};
