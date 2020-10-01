import React, { useState } from "react";
import { useOnWindowEvent } from "@library/hooks";
import { View } from "@library/ui";
import createWindow from "@procedures/windows/create";
import store from "@store";
import ToolInfo from "./ToolInfo";
import ToolList from "./ToolList";
import { preventWindowScrollOnArrowKey } from "./helpers";
import styles from "./styles";

const ARROW_DOWN = 40;
const ARROW_UP = 38;
const ENTER = 13;
const ESCAPE = 27;

const ToolBrowser = ({ style, tools }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openWindow = (configs) => {
    store.dispatch("toolBrowser.close");
    setTimeout(() => createWindow(configs), 0);
  };

  const updateSelectedIndex = (index) => {
    if (index >= 0 && index <= tools.length - 1) {
      setSelectedIndex(index);
    }
  };

  const handleKeyUp = (event) => {
    const keyCode = event.keyCode;

    keyCode === ARROW_DOWN && updateSelectedIndex(selectedIndex + 1);
    keyCode === ARROW_UP && updateSelectedIndex(selectedIndex - 1);
    keyCode === ENTER && openWindow(tools[selectedIndex].window);
    keyCode === ESCAPE && store.dispatch("toolBrowser.close");
  };

  useOnWindowEvent("keyup", handleKeyUp);
  useOnWindowEvent("keydown", preventWindowScrollOnArrowKey);

  return (
    <View style={{ ...styles.view(window.innerWidth / 2), ...style }}>
      <ToolList style={styles.toolList} openWindow={openWindow} selectedIndex={selectedIndex} tools={tools} />
      <ToolInfo style={styles.toolInfo} selectedTool={tools[selectedIndex]} />
    </View>
  );
};

ToolBrowser.defaultProps = {
  style: {},
  tools: [],
};

export default ToolBrowser;
