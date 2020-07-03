const topRight = ({ elem, event }) => {
  const width = elem.width + event.movementX;
  const height = elem.height - event.movementY;

  return {
    width: width > 1 ? width : 1,
    height: height > 1 ? height : 1,
    top: elem.top + event.movementY,
    left: elem.left
  };
};

export default topRight;
