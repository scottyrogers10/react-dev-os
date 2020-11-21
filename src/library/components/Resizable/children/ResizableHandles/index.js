import React, { Fragment } from "react";
import ResizableHandle from "./ResizableHandle";
import styles from "./styles";

const ResizableHandles = ({ onResize, onResizeEnd, onResizeStart }) => {
  return (
    <Fragment>
      <ResizableHandle
        style={styles.top}
        cursor={"ns-resize"}
        onResize={(event) => onResize(event, "top")}
        onResizeEnd={onResizeEnd}
        onResizeStart={onResizeStart}
      />
      <ResizableHandle
        style={styles.left}
        cursor={"ew-resize"}
        onResize={(event) => onResize(event, "left")}
        onResizeEnd={onResizeEnd}
        onResizeStart={onResizeStart}
      />
      <ResizableHandle
        style={styles.right}
        cursor={"ew-resize"}
        onResize={(event) => onResize(event, "right")}
        onResizeEnd={onResizeEnd}
        onResizeStart={onResizeStart}
      />
      <ResizableHandle
        style={styles.bottom}
        cursor={"ns-resize"}
        onResize={(event) => onResize(event, "bottom")}
        onResizeEnd={onResizeEnd}
        onResizeStart={onResizeStart}
      />
      <ResizableHandle
        style={styles.topLeft}
        cursor={"nwse-resize"}
        onResize={(event) => onResize(event, "topLeft")}
        onResizeEnd={onResizeEnd}
        onResizeStart={onResizeStart}
      />
      <ResizableHandle
        style={styles.topRight}
        cursor={"nesw-resize"}
        onResize={(event) => onResize(event, "topRight")}
        onResizeEnd={onResizeEnd}
        onResizeStart={onResizeStart}
      />
      <ResizableHandle
        style={styles.bottomLeft}
        cursor={"nesw-resize"}
        onResize={(event) => onResize(event, "bottomLeft")}
        onResizeEnd={onResizeEnd}
        onResizeStart={onResizeStart}
      />
      <ResizableHandle
        style={styles.bottomRight}
        cursor={"nwse-resize"}
        onResize={(event) => onResize(event, "bottomRight")}
        onResizeEnd={onResizeEnd}
        onResizeStart={onResizeStart}
      />
    </Fragment>
  );
};

ResizableHandles.defaultProps = {
  onResize: () => {},
  onResizeEnd: () => {},
  onResiseStart: () => {},
};

export default ResizableHandles;
