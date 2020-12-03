import { osWindows } from "@procedures";
import store from "@store";

export default (tools) => {
  const getShortcutHandler = (configs) => () => {
    store.dispatch("toolBrowser.close");
    osWindows.create(configs);
  };

  return tools.reduce((prevVal, tool, index) => {
    if (tool.hotKeys.length > 0) {
      prevVal[`openTool[${index}]`] = { keyBindings: tool.hotKeys, onShortcut: getShortcutHandler(tool.window) };
    }

    return prevVal;
  }, {});
};
