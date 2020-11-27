import React, { useRef } from "react";
import styles from "./styles";

const ResizableHandle = ({ cursor, onResize, onResizeEnd, onResizeStart, style }) => {
  const isMouseDown = useRef(false);

  const handleMouseUp = (event) => {
    document.body.style.cursor = "auto";
    document.body.style.userSelect = "";
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);

    if (isMouseDown.current) {
      isMouseDown.current = false;
      onResizeEnd(event);
    }
  };

  const handleMouseMove = (event) => {
    if (isMouseDown.current) {
      event.stopImmediatePropagation();
      requestAnimationFrame(() => onResize(event));
    }
  };

  const handleMouseDown = (event) => {
    document.body.style.cursor = cursor;
    document.body.style.userSelect = "none";
    isMouseDown.current = true;
    onResizeStart(event);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  return <div style={{ ...styles.view(cursor), ...style }} draggable={false} onMouseDown={handleMouseDown}></div>;
};

ResizableHandle.defaultProps = {
  cursor: "nwse-resize",
  onResize: () => {},
  onResizeEnd: () => {},
  onResizeStart: () => {},
  style: {},
};

export default ResizableHandle;
