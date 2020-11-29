const left = ({ elem, event, minSize }) => {
  const width = elem.width - event.movementX;

  return {
    width: width >= minSize.width ? width : elem.width,
    height: elem.height,
    top: elem.top,
    left: width >= minSize.width ? elem.left + event.movementX : elem.left,
  };
};

export default left;
