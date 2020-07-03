import React, { useRef } from "react";
import { ViewRef } from "../../../ui";
import { ResizableHandles } from "./children";
import { calculateResize } from "./helpers";
import styles from "./styles";

const Resizable = ({ children, isActive, onResize, style }) => {
  const elem = useRef(null);
  const handleResize = (event, handle) => onResize(calculateResize({ elem, event, handle }));

  return (
    <ViewRef style={{ ...styles.view, ...style }} ref={elem}>
      {children}
      {isActive && <ResizableHandles onResize={handleResize} />}
    </ViewRef>
  );
};

Resizable.defaultProps = {
  children: null,
  isActive: false,
  onResize: () => {},
  style: {},
};

export default Resizable;
