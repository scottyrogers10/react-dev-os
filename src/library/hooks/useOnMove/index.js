import { useEffect, useRef } from "react";

export default ({ onMove = () => {} }) => {
  let { current: isMouseDown } = useRef(false);
  const ref = useRef(null);

  const handleMouseMove = (event) => isMouseDown && onMove(event);

  const handleMouseUp = () => {
    isMouseDown = false;
    window.removeEventListener("mouseup", handleMouseUp);
    window.removeEventListener("mousemove", handleMouseMove);
  };

  const handleMouseDown = () => {
    isMouseDown = true;
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);
  };

  useEffect(() => {
    const elem = ref.current;

    if (elem) {
      elem.addEventListener("mousedown", handleMouseDown);
      return () => {
        elem.removeEventListener("mousedown", handleMouseDown);
      };
    }
  }, [ref.current]);

  return { ref };
};
