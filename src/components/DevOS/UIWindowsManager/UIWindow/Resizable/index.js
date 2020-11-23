import React from "react";
import { Resizable as LibResizable } from "@library/components";
import { onResizeHandlers } from "./helpers";
import styles from "./styles";

const Resizable = ({ children, contentRef, id, minSize, uiWindowRef, style }) => {
  const { handleResize, handleResizeEnd, handleResizeStart } = onResizeHandlers({ contentRef, id, uiWindowRef });

  return (
    <LibResizable
      style={{ ...style, ...styles.resizable }}
      minHeight={minSize.height}
      minWidth={minSize.width}
      onResize={handleResize}
      onResizeEnd={handleResizeEnd}
      onResizeStart={handleResizeStart}
    >
      {children}
    </LibResizable>
  );
};

Resizable.defaultProps = {
  children: null,
  contentRef: null,
  id: null,
  minSize: { height: 0, width: 0 },
  uiWindowRef: null,
  style: {},
};

export default Resizable;
