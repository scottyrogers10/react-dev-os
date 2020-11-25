import React, { useEffect } from "react";
import { hotKeys } from "@configs";
import { View } from "@library/components";
import { useKeyboardShortcut } from "@library/hooks";
import store from "@store";
import ToolsManager from "./ToolsManager";
import UIWindowsManager from "./UIWindowsManager";
import styles from "./styles";

const DevOS = ({ style, themeColors, tools }) => {
  const handleCloseAll = () => {
    store.dispatch("toolBrowser.close");
    store.dispatch("uiWindows.removeAll");
  };

  useKeyboardShortcut(hotKeys.closeAll, handleCloseAll);

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
