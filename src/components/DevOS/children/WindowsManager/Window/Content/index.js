import React, { memo } from "react";
import { ViewRef } from "@library/components";
import { osWindows } from "@procedures";
import store from "@store";
import styles from "./styles";

const Content = memo(({ contentRef, id, style }) => {
  const Component = store.getState("osWindows").byId[id].component;
  const devOS = {
    closeWindow: () => osWindows.close(id),
    createWindow: osWindows.create,
    id,
    theme: store.getState("ui").theme,
  };

  return (
    <ViewRef style={{ ...styles.view, ...style }} ref={contentRef}>
      <Component devOS={devOS} />
    </ViewRef>
  );
});

Content.defaultProps = {
  contentRef: null,
  id: null,
  style: {},
};

export default Content;
