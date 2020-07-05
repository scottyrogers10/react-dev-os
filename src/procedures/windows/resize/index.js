import store from "@store";
import calculateResize from "./calculateResize";

export default ({ dimensions, elem, id, shouldDispatch = false }) => {
  const window = store.getState("windows").byId[id];

  if (window) {
    const { position, size } = calculateResize(dimensions, shouldDispatch);
    elem.style.transform = `translate(${position.x}px, ${position.y}px)`;
    elem.style.height = `${size.height}px`;
    elem.style.width = `${size.width}px`;

    shouldDispatch && store.dispatch("windows.update", { id, position, size });
  }
};
