import { osWindows } from "@procedures";

export default (tools) => {
  const getShortcutHandler = (configs) => () => osWindows.create(configs);

  return tools.reduce((prevVal, tool, index) => {
    if (tool.hotKey) {
      prevVal[`openTool[${index}]`] = { keyBindings: tool.hotKey, onShortcut: getShortcutHandler(tool.window) };
    }

    return prevVal;
  }, {});
};
