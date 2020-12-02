import React from "react";
import { useOnWindowKeyboardShortcuts } from "@library/hooks";
import { useStore } from "@tools/hooks";
import { ToolBrowser } from "./children";
import { getShortcuts, getTools } from "./helpers";
import styles from "./styles";

const ToolsManager = ({ style, tools }) => {
  const isOpen = useStore((store) => store.getState("toolBrowser").isOpen);
  const formattedTools = getTools(tools);

  useOnWindowKeyboardShortcuts(getShortcuts(formattedTools));
  return isOpen && <ToolBrowser style={{ ...styles.toolBrowser, ...style }} tools={formattedTools} />;
};

ToolsManager.defaultProps = {
  style: {},
  tools: [],
};

export default ToolsManager;
