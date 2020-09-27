import React from "react";
import { Resizable as UIResizable } from "@library/ui";
import { onResizeHandlers } from "./helpers";
import styles from "./styles";

const Resizable = ({ children, contentRef, id, windowRef, style }) => {
  const { handleResize, handleResizeEnd, handleResizeStart } = onResizeHandlers({ contentRef, id, windowRef });

  return (
    <UIResizable
      style={{ ...style, ...styles.resizable }}
      minHeight={24}
      minWidth={95}
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
  windowRef: null,
  style: {},
};

export default Resizable;
