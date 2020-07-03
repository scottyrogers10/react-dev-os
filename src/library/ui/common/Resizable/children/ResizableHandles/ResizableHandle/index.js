import React, { useState } from "react";
import { useOnWindowEvent } from "../../../../../../hooks";
import { View } from "../../../../../../ui";
import styles from "./styles";

const ResizableHandle = ({ cursor, onResize, style }) => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const handleMouseDown = (event) => {
    setIsMouseDown(true);
    event.preventDefault();
    event.stopPropagation();
  };
  const handleMouseUp = (event) => {
    if (isMouseDown) {
      setIsMouseDown(false);
      event.preventDefault();
      event.stopPropagation();
    }
  };
  const handleMouseMove = (event) => {
    if (isMouseDown) {
      onResize(event);
      event.preventDefault();
      event.stopPropagation();
    }
  };

  useOnWindowEvent("mouseup", handleMouseUp);
  useOnWindowEvent("mousemove", handleMouseMove);

  return <View style={{ ...styles.view(cursor), ...style }} draggable={false} onMouseDown={handleMouseDown}></View>;
};

ResizableHandle.defaultProps = {
  cursor: "nwse-resize",
  onResize: () => {},
  style: {},
};

export default ResizableHandle;
