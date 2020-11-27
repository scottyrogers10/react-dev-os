import defaultShortcuts from "./default-shortcuts";

export default (customHotKeys = {}) => {
  const shortcuts = { ...defaultShortcuts };

  Object.entries(customHotKeys).forEach(([key, value]) => {
    shortcuts[key].keyBindings = value;
  });

  return shortcuts;
};
