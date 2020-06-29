import store from "@store";

const calculateMove = ({ event, prevPosition }) => {
  const prevTop = prevPosition.y;
  const prevLeft = prevPosition.x;

  return {
    x: prevLeft + event.movementX,
    y: prevTop + event.movementY,
  };
};

export default (event, id) => {
  requestAnimationFrame(() => {
    const window = store.getState("windows").byId[id];

    if (window) {
      const position = calculateMove({ event, prevPosition: window.position });
      store.dispatch("windows.update", { id, position });
      window.events.onMove(event);
    }
  });

  event.stopPropagation();
  event.preventDefault();
};
