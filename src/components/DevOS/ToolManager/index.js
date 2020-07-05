import { useOnWindowEvent } from "@library/hooks";
import createWindow from "@procedures/windows/create";
import ToolBrowser from "./ToolBrowser";

const T_KEYCODE = 84;

const ToolManager = ({ tools }) => {
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

  return null;
};

ToolManager.defaultProps = {
  tools: [],
};

export default ToolManager;
