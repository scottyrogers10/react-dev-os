const left = ({ elem, event }) => {
  const width = elem.width - event.movementX;

  return {
    width: width > 1 ? width : 1,
    height: elem.height,
    top: elem.top,
    left: elem.left + event.movementX
  };
};

export default left;
