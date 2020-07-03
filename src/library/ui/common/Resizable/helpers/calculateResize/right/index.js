const right = ({ elem, event }) => {
  const width = elem.width + event.movementX;

  return {
    width: width > 1 ? width : 1,
    height: elem.height,
    top: elem.top,
    left: elem.left
  };
};

export default right;
