import React, { useRef } from "react";
import { ViewRef } from "../../../ui";
import { ResizableHandles } from "./children";
import { calculateResize } from "./helpers";
import styles from "./styles";

const Resizable = ({ children, isActive, minHeight, minWidth, onResize, onResizeEnd, onResizeStart, style }) => {
  const resizableRef = useRef(null);
  const handleResize = (event, handleType) =>
    onResize(calculateResize({ elem: resizableRef.current, event, handleType, minSize: { height: minHeight, width: minWidth } }), event);

  return (
    <ViewRef style={{ ...styles.view, ...style }} ref={resizableRef}>
      {children}
      {isActive && <ResizableHandles onResize={handleResize} onResizeEnd={onResizeEnd} onResizeStart={onResizeStart} />}
    </ViewRef>
  );
};

Resizable.defaultProps = {
  children: null,
  isActive: true,
  minHeight: 1,
  minWidth: 1,
  onResize: () => {},
  onResizeEnd: () => {},
  onResizeStart: () => {},
  style: {},
};

export default Resizable;
