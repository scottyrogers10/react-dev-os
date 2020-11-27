import React from "react";
import { useStore } from "@tools/hooks";
import ToolBrowser from "./ToolBrowser";
import styles from "./styles";

const ToolsManager = ({ style, tools }) => {
  const formattedTools = tools.map((tool) => (typeof tool === "function" ? tool() : tool));
  const isOpen = useStore((store) => store.getState("toolBrowser").isOpen);

  return isOpen && <ToolBrowser style={{ ...styles.toolBrowser, ...style }} tools={formattedTools} />;
};

ToolsManager.defaultProps = {
  style: {},
  tools: [],
};

export default ToolsManager;
