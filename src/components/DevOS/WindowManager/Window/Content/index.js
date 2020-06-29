import React, { memo } from "react";
import { View } from "@library/ui";
import store from "@store";
import styles from "./styles";

const Content = memo(({ id, style }) => {
  const Component = store.getState("windows").byId[id].component;

  return (
    <View style={{ ...styles.view, ...style }}>
      <Component style={styles.component} />
    </View>
  );
});

Content.defaultProps = {
  id: null,
  style: {},
};

export default Content;
