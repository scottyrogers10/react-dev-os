import React from "react";
import { useOnWindowEvent } from "@library/hooks";
import store from "@store";
import { useStore } from "@tools/hooks";
import ToolBrowser from "./ToolBrowser";
import styles from "./styles";

const T_KEYCODE = 84;

const ToolsManager = ({ style, tools }) => {
  const formattedTools = tools.map((tool) => (typeof tool === "function" ? tool() : tool));
  const isOpen = useStore((store) => store.getState("toolBrowser").isOpen);

  const handleKeyUp = (event) => {
    const keyCode = event.keyCode;
    const tagName = event.target.tagName.toUpperCase();

    if (tagName !== "INPUT" && tagName !== "TEXTAREA" && keyCode === T_KEYCODE) {
      store.dispatch("toolBrowser.toggle");
    }
  };

  useOnWindowEvent("keyup", handleKeyUp);

  return isOpen && <ToolBrowser style={{ ...styles.toolBrowser, ...style }} tools={formattedTools} />;
};

ToolsManager.defaultProps = {
  style: {},
  tools: [],
};

export default ToolsManager;
