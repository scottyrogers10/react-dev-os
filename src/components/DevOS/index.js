import React, { useEffect } from "react";
import { View } from "@library/components";
import store from "@store";
import ToolsManager from "./ToolsManager";
import UIWindowsManager from "./UIWindowsManager";
import styles from "./styles";

const DevOS = ({ style, themeColors, tools }) => {
  useEffect(() => {
    themeColors && store.dispatch("ui.updateTheme", { colors: themeColors });
  }, []);

  return (
    <View style={{ ...styles.view, ...style }}>
      <ToolsManager tools={tools} />
      <UIWindowsManager />
    </View>
  );
};

DevOS.defaultProps = {
  style: {},
  themeColors: null,
  tools: [],
};

export default DevOS;
