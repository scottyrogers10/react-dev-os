import React, { memo } from "react";
import { ViewRef } from "@library/components";
import store from "@store";
import { getDevOSContext } from "./helpers";
import styles from "./styles";

const Content = memo(({ contentRef, id, style }) => {
  const Component = store.getState("osWindows").byId[id].component;
  const devOS = getDevOSContext(id);

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
