const topLeft = ({ elem, event, minSize }) => {
  const width = elem.width - event.movementX;
  const height = elem.height - event.movementY;

  return {
    width: width >= minSize.width ? width : elem.width,
    height: height >= minSize.height ? height : elem.height,
    top: height >= minSize.height ? elem.top + event.movementY : elem.top,
    left: width >= minSize.width ? elem.left + event.movementX : elem.left,
  };
};

export default topLeft;
