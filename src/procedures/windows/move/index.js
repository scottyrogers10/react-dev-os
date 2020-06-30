import store from "@store";

const calculateMove = ({ event, prevPosition }) => {
  const prevTop = prevPosition.y;
  const prevLeft = prevPosition.x;

  return {
    x: prevLeft + event.movementX,
    y: prevTop + event.movementY,
  };
};

export default ({ event, id, update }) => {
  requestAnimationFrame(() => {
    const window = store.getState("windows").byId[id];

    if (window) {
      update(({ position: prevPosition }) => ({ position: calculateMove({ event, prevPosition }) }));
      window.events.onMove(event);
    }
  });

  event.stopPropagation();
  event.preventDefault();
};
