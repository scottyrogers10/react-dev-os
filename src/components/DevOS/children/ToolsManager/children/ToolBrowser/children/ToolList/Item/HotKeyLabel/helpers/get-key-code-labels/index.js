import keyCodesMap from "@configs/key-codes";

export default (hotKeys) => {
  const keyCodes = hotKeys[0]?.constructor === Array ? hotKeys[0] : [hotKeys[0]];

  const labels = keyCodes.map((keyCode) => {
    return keyCodesMap[keyCode];
  });

  return labels.every((label) => label) ? labels : [];
};
