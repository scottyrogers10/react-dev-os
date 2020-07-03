import React, { Fragment } from "react";
import ResizableHandle from "./ResizableHandle";
import styles from "./styles";

const ResizableHandles = ({ onResize }) => {
  return (
    <Fragment>
      <ResizableHandle style={styles.top} cursor={"ns-resize"} onResize={(event) => onResize(event, "top")} />
      <ResizableHandle style={styles.left} cursor={"ew-resize"} onResize={(event) => onResize(event, "left")} />
      <ResizableHandle style={styles.right} cursor={"ew-resize"} onResize={(event) => onResize(event, "right")} />
      <ResizableHandle style={styles.bottom} cursor={"ns-resize"} onResize={(event) => onResize(event, "bottom")} />
      <ResizableHandle style={styles.topLeft} cursor={"nwse-resize"} onResize={(event) => onResize(event, "topLeft")} />
      <ResizableHandle style={styles.topRight} cursor={"nesw-resize"} onResize={(event) => onResize(event, "topRight")} />
      <ResizableHandle style={styles.bottomLeft} cursor={"nesw-resize"} onResize={(event) => onResize(event, "bottomLeft")} />
      <ResizableHandle style={styles.bottomRight} cursor={"nwse-resize"} onResize={(event) => onResize(event, "bottomRight")} />
    </Fragment>
  );
};

ResizableHandles.defaultProps = {
  onResize: () => {},
};

export default ResizableHandles;
