const top = ({ elem, event }) => {
  const height = elem.height - event.movementY;

  return {
    width: elem.width,
    height: height > 1 ? height : 1,
    top: elem.top + event.movementY,
    left: elem.left
  };
};

export default top;
