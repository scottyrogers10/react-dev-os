import { osWindows } from "@procedures";
import store from "@store";

export default (tools) => {
  const getShortcutHandler = (configs) => () => {
    if (!store.getState("toolBrowser").isOpen) {
      osWindows.create(configs);
    }
  };

  return tools.reduce((prevVal, tool, index) => {
    if (tool.hotKey) {
      prevVal[`openTool[${index}]`] = { keyBindings: tool.hotKey, onShortcut: getShortcutHandler(tool.window) };
    }

    return prevVal;
  }, {});
};
