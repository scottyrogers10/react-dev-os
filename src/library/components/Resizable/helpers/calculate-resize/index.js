import bottom from "./bottom";
import bottomLeft from "./bottom-left";
import bottomRight from "./bottom-right";
import left from "./left";
import right from "./right";
import top from "./top";
import topLeft from "./top-left";
import topRight from "./top-right";

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
  return elem
    ? calculators[handleType]({
        elem: elem.getBoundingClientRect(),
        event,
        minSize,
      })
    : {
        width: 0,
        height: 0,
        top: 0,
        left: 0,
      };
};

export default calculateResize;
