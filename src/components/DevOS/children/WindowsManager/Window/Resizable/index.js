import React from "react";
import { Resizable as UIResizable } from "@library/components";
import { onResizeHandlers } from "./helpers";
import styles from "./styles";

const Resizable = ({ children, contentRef, id, minSize, osWindowRef, style }) => {
  const { handleResize, handleResizeEnd, handleResizeStart } = onResizeHandlers({ contentRef, id, osWindowRef });

  return (
    <UIResizable
      style={{ ...style, ...styles.resizable }}
      minHeight={minSize.height}
      minWidth={minSize.width}
      onResize={handleResize}
      onResizeEnd={handleResizeEnd}
      onResizeStart={handleResizeStart}
    >
      {children}
    </UIResizable>
  );
};

Resizable.defaultProps = {
  children: null,
  contentRef: null,
  id: null,
  minSize: { height: 0, width: 0 },
  osWindowRef: null,
  style: {},
};

export default Resizable;
