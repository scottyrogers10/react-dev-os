import { useRef } from "react";

export default ({ onMove = () => {}, onMoveEnd = () => {}, onMoveStart = () => {} }) => {
  const isMouseDown = useRef(false);

  const handleMouseMove = (event) => isMouseDown.current && onMove(event);

  const handleMouseUp = (event) => {
    isMouseDown.current = false;
    onMoveEnd(event);
    window.removeEventListener("mouseup", handleMouseUp);
    window.removeEventListener("mousemove", handleMouseMove);
  };

  const handleMouseDown = (event) => {
    isMouseDown.current = true;
    onMoveStart(event);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);
  };

  const events = {
    onMouseDown: handleMouseDown,
  };

  return { events };
};
