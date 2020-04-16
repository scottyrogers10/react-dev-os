import React from "react";
import { View } from "library/ui";
import WindowManager from "./WindowManager";
import styles from "./styles";

const DevOS = ({ style }) => {
  return (
    <View style={{ ...styles.view, ...style }}>
      <WindowManager />
    </View>
  );
};

DevOS.defaultProps = {
  style: {},
};

export default DevOS;
