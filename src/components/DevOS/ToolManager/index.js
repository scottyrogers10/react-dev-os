import { useOnWindowEvent } from "@library/hooks";
import { createToolBrowser } from "./helpers";

const ToolManager = ({ tools }) => {
  const handleKeyUp = (event) => {
    const keyCode = event.keyCode;
    const tagName = event.target.tagName.toUpperCase();
    createToolBrowser({ keyCode, tagName, tools });
  };

  useOnWindowEvent("keyup", handleKeyUp);

  return null;
};

ToolManager.defaultProps = {
  tools: [],
};

export default ToolManager;
