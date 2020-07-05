import bottom from "./bottom";
import bottomLeft from "./bottomLeft";
import bottomRight from "./bottomRight";
import left from "./left";
import right from "./right";
import top from "./top";
import topLeft from "./topLeft";
import topRight from "./topRight";

const calculators = {
  bottom,
  bottomLeft,
  bottomRight,
  left,
  right,
  top,
  topLeft,
  topRight,
};

const calculateResize = ({ elem, event, handleType, minSize }) => {
  return calculators[handleType]({
    elem: elem.getBoundingClientRect(),
    event,
    minSize,
  });
};

export default calculateResize;
