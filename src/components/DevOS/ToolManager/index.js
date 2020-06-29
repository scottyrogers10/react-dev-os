import React from "react";
import { View } from "@library/ui";
import { useOnWindowEvent } from "@library/hooks";
import createWindow from "@procedures/windows/create";
import ToolBrowser from "./ToolBrowser";
import styles from "./styles";

const T_KEYCODE = 84;

const ToolManager = ({ style, tools }) => {
  const handleKeyUp = (event) => {
    const tagName = event.target.tagName.toUpperCase();

    if (tagName !== "INPUT" && tagName !== "TEXTAREA" && event.keyCode === T_KEYCODE) {
      createWindow({
        type: "TOOL_BROWSER",
        component: (props) => ToolBrowser({ tools, ...props }),
        position: { x: 24, y: window.innerHeight - 184 },
        size: { width: 140, height: 160 },
      });
    }
  };

  useOnWindowEvent("keyup", handleKeyUp);

  return <View style={{ ...styles.view, ...style }} />;
};

ToolManager.defaultProps = {
  style: {},
  tools: [],
};

export default ToolManager;
