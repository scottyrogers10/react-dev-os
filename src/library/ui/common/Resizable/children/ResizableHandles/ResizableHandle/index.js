import React, { useRef } from "react";
import { View } from "../../../../../../ui";
import styles from "./styles";

const ResizableHandle = ({ cursor, onResize, onResizeEnd, onResizeStart, style }) => {
  let { current: isMouseDown } = useRef(false);

  const handleMouseUp = (event) => {
    document.body.style.cursor = "auto";
    document.body.style.userSelect = "";
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);

    if (isMouseDown) {
      isMouseDown = false;
      onResizeEnd(event);
    }
  };

  const handleMouseMove = (event) => {
    if (isMouseDown) {
      event.stopImmediatePropagation();
      onResize(event);
    }
  };

  const handleMouseDown = (event) => {
    document.body.style.cursor = cursor;
    document.body.style.userSelect = "none";
    isMouseDown = true;
    onResizeStart(event);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  return <View style={{ ...styles.view(cursor), ...style }} draggable={false} onMouseDown={handleMouseDown}></View>;
};

ResizableHandle.defaultProps = {
  cursor: "nwse-resize",
  onResize: () => {},
  onResizeEnd: () => {},
  onResizeStart: () => {},
  style: {},
};

export default ResizableHandle;
