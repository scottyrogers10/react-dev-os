import React, { memo } from "react";
import { ViewRef } from "@library/ui";
import closeWindow from "@procedures/windows/close";
import createWindow from "@procedures/windows/create";
import store from "@store";
import styles from "./styles";

const Content = memo(({ elemRef, id, style }) => {
  const Component = store.getState("windows").byId[id].component;
  const handleClose = () => closeWindow(id);

  return (
    <ViewRef style={{ ...styles.view, ...style }} ref={elemRef}>
      <Component closeWindow={handleClose} createWindow={createWindow} />
    </ViewRef>
  );
});

Content.defaultProps = {
  elemRef: null,
  id: null,
  style: {},
};

export default Content;
