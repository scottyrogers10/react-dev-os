import React, { memo } from "react";
import { ViewRef } from "@library/ui";
import closeWindow from "@procedures/windows/close";
import createWindow from "@procedures/windows/create";
import store from "@store";
import styles from "./styles";

const Content = memo(({ contentRef, id, style }) => {
  const Component = store.getState("windows").byId[id].component;
  const handleClose = () => closeWindow(id);

  return (
    <ViewRef style={{ ...styles.view, ...style }} ref={contentRef}>
      <Component closeWindow={handleClose} createWindow={createWindow} __id={id} />
    </ViewRef>
  );
});

Content.defaultProps = {
  contentRef: null,
  id: null,
  style: {},
};

export default Content;
