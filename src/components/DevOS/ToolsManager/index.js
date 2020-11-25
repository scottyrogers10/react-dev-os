import React, { useEffect } from "react";
import { hotKeys } from "@configs";
import { useKeyboardShortcut } from "@library/hooks";
import store from "@store";
import { useStore } from "@tools/hooks";
import ToolBrowser from "./ToolBrowser";
import styles from "./styles";

const ToolsManager = ({ style, tools }) => {
  const formattedTools = tools.map((tool) => (typeof tool === "function" ? tool() : tool));
  const isOpen = useStore((store) => store.getState("toolBrowser").isOpen);

  const handleCloseToolBrowser = () => store.dispatch("toolBrowser.close");
  const handleToggleToolBrowser = () => store.dispatch("toolBrowser.toggle");

  useKeyboardShortcut(hotKeys.closeToolBrowser, handleCloseToolBrowser);
  useKeyboardShortcut(hotKeys.toggleToolBrowser, handleToggleToolBrowser);

  return isOpen && <ToolBrowser style={{ ...styles.toolBrowser, ...style }} tools={formattedTools} />;
};

ToolsManager.defaultProps = {
  style: {},
  tools: [],
};

export default ToolsManager;
