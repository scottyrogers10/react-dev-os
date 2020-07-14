import createWindow from "@procedures/windows/create";
import { ToolBrowser } from "../../children";

const T_KEYCODE = 84;

export default ({ keyCode, tagName, tools }) => {
  if (tagName !== "INPUT" && tagName !== "TEXTAREA" && keyCode === T_KEYCODE) {
    createWindow({
      type: "TOOL_BROWSER",
      component: (props) => ToolBrowser({ tools, ...props }),
      position: { x: 24, y: window.innerHeight - 184 },
      size: { width: 140, height: 160 },
    });
  }
};
