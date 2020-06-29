import React from "react";
import { View } from "@library/ui";
import ToolManager from "./ToolManager";
import WindowManager from "./WindowManager";
import styles from "./styles";

const DevOS = ({ style, tools }) => {
  return (
    <View style={{ ...styles.view, ...style }}>
      <ToolManager tools={tools} />
      <WindowManager />
    </View>
  );
};

DevOS.defaultProps = {
  style: {},
  tools: [],
};

export default DevOS;
