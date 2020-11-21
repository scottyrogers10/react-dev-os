import React from "react";
import { Resizable as LibResizable } from "@library/components";
import { onResizeHandlers } from "./helpers";
import styles from "./styles";

const Resizable = ({ children, contentRef, id, uiWindowRef, style }) => {
  const { handleResize, handleResizeEnd, handleResizeStart } = onResizeHandlers({ contentRef, id, uiWindowRef });

  return (
    <LibResizable
      style={{ ...style, ...styles.resizable }}
      minHeight={24}
      minWidth={95}
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
  uiWindowRef: null,
  style: {},
};

export default Resizable;
