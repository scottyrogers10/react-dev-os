import React, { useMemo } from "react";
import { tool as toolFactory } from "@factories";
import { useOnWindowKeyboardShortcuts } from "@library/hooks";
import { useStore } from "@tools/hooks";
import { ToolBrowser } from "./children";
import { getShortcuts } from "./helpers";
import styles from "./styles";

const ToolsManager = ({ style, tools }) => {
  const isOpen = useStore((store) => store.getState("toolBrowser").isOpen);
  const formattedTools = tools.map((tool) => {
    return typeof tool === "function" ? toolFactory.create(tool()) : toolFactory.create(tool);
  });

  useOnWindowKeyboardShortcuts(getShortcuts(formattedTools));
  return isOpen && <ToolBrowser style={{ ...styles.toolBrowser, ...style }} tools={formattedTools} />;
};

ToolsManager.defaultProps = {
  style: {},
  tools: [],
};

export default ToolsManager;
