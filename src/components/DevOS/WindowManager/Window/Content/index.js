import React, { memo } from "react";
import { View } from "@library/ui";
import closeWindow from "@procedures/windows/close";
import createWindow from "@procedures/windows/create";
import store from "@store";
import styles from "./styles";

const Content = memo(({ id, style }) => {
  const Component = store.getState("windows").byId[id].component;
  const handleClose = () => closeWindow(id);

  return (
    <View style={{ ...styles.view, ...style }}>
      <Component closeWindow={handleClose} createWindow={createWindow} />
    </View>
  );
});

Content.defaultProps = {
  id: null,
  style: {},
};

export default Content;
