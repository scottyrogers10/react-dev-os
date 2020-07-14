import { useEffect, useRef } from "react";

export default ({ onMove = () => {}, onMoveEnd = () => {}, onMoveStart = () => {} }) => {
  let { current: isMouseDown } = useRef(false);
  const ref = useRef(null);

  const handleMouseMove = (event) => isMouseDown && onMove(event);

  const handleMouseUp = (event) => {
    isMouseDown = false;
    onMoveEnd(event);
    window.removeEventListener("mouseup", handleMouseUp);
    window.removeEventListener("mousemove", handleMouseMove);
  };

  const handleMouseDown = (event) => {
    isMouseDown = true;
    onMoveStart(event);
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
