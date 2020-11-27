export default (keyBindings, keyMap) => {
  return keyBindings.some((keyBinding) => {
    if (keyBinding.constructor === Array) {
      return keyBinding.every((key) => keyMap[key]);
    }

    return keyMap[keyBinding];
  });
};
