export default (shortcuts, keyMap) => {
  return shortcuts.some((shortcut) => {
    if (shortcut.constructor === Array) {
      return shortcut.every((key) => keyMap[key]);
    }

    return keyMap[shortcut];
  });
};
