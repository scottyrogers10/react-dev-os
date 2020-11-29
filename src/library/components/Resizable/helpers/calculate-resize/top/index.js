const top = ({ elem, event, minSize }) => {
  const height = elem.height - event.movementY;

  return {
    width: elem.width,
    height: height >= minSize.height ? height : elem.height,
    top: height >= minSize.height ? elem.top + event.movementY : elem.top,
    left: elem.left,
  };
};

export default top;
