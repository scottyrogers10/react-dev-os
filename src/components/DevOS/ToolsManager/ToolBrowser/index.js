import React, { useRef, useState } from "react";
import { useOnWindowEvent } from "@library/hooks";
import { ViewRef } from "@library/components";
import { uiWindows } from "@procedures";
import store from "@store";
import { ToolInfo, ToolList } from "./children";
import { preventWindowScrollOnArrowKey } from "./helpers";
import styles from "./styles";

const ARROW_DOWN = 40;
const ARROW_UP = 38;
const ENTER = 13;

const ToolBrowser = ({ style, tools }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [centerScreen, setCenterScreen] = useState(window.innerWidth / 2);
  const containerRef = useRef(null);

  const openUIWindow = (configs) => {
    store.dispatch("toolBrowser.close");
    setTimeout(() => uiWindows.create(configs), 0);
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
    keyCode === ENTER && openUIWindow(tools[selectedIndex].window);
  };

  const handleMouseDown = (event) => {
    if (containerRef && !containerRef.current.contains(event.target)) {
      store.dispatch("toolBrowser.close");
    }
  };

  const handleScreenResize = () => {
    setCenterScreen(window.innerWidth / 2);
  };

  useOnWindowEvent("keyup", handleKeyUp);
  useOnWindowEvent("keydown", preventWindowScrollOnArrowKey);
  useOnWindowEvent("mousedown", handleMouseDown);
  useOnWindowEvent("resize", handleScreenResize);

  return (
    <ViewRef style={{ ...styles.view(centerScreen), ...style }} ref={containerRef}>
      <ToolList
        style={styles.toolList}
        openUIWindow={openUIWindow}
        selectedIndex={selectedIndex}
        tools={tools}
        updateSelectedIndex={updateSelectedIndex}
      />
      <ToolInfo style={styles.toolInfo} selectedTool={tools[selectedIndex]} />
    </ViewRef>
  );
};

ToolBrowser.defaultProps = {
  style: {},
  tools: [],
};

export default ToolBrowser;
