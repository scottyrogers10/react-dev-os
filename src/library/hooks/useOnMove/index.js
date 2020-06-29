import { useEffect, useRef, useState } from "react";
import { useOnWindowEvent } from "../../hooks";

export default ({ onMove = () => {} }) => {
  const ref = useRef(null);
  const [isMouseDown, setMouseDown] = useState(false);
  const handleMouseDown = () => setMouseDown(true);
  const handleMouseUp = () => setMouseDown(false);
  const handleMouseMove = (event) => isMouseDown && onMove(event);

  useEffect(() => {
    const elem = ref.current;

    if (elem) {
      elem.addEventListener("mousedown", handleMouseDown);
      return () => {
        elem.removeEventListener("mousedown", handleMouseDown);
      };
    }
  }, [ref.current]);

  useOnWindowEvent("mouseup", handleMouseUp);
  useOnWindowEvent("mousemove", handleMouseMove);

  return { ref };
};
