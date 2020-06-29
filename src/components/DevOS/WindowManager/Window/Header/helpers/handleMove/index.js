const calculateMove = ({ event, prevPosition }) => {
  const prevTop = prevPosition.y;
  const prevLeft = prevPosition.x;

  return {
    x: prevLeft + event.movementX,
    y: prevTop + event.movementY,
  };
};

export default (store, event, id) => {
  requestAnimationFrame(() => {
    const prevPosition = store.getState("windows").byId[id].position;
    const position = calculateMove({ event, prevPosition });
    store.dispatch("windows.update", { id, position });
  });

  event.stopPropagation();
  event.preventDefault();
};
