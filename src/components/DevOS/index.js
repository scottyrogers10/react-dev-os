import React, { useEffect } from "react";
import { View } from "@library/ui";
import store from "@store";
import ToolManager from "./ToolManager";
import WindowManager from "./WindowManager";
import styles from "./styles";

const DevOS = ({ style, themeColors, tools }) => {
  useEffect(() => {
    themeColors && store.dispatch("ui.updateTheme", { colors: themeColors });
  }, []);

  return (
    <View style={{ ...styles.view, ...style }}>
      <ToolManager tools={tools} />
      <WindowManager />
    </View>
  );
};

DevOS.defaultProps = {
  style: {},
  themeColors: null,
  tools: [],
};

export default DevOS;
