const ALT = 18;
const ESC = 27;
const LEFT_ARROW = 37;
const RIGHT_ARROW = 39;
const Q = 81;
const W = 87;
const Z = 90;

export default {
  closeToolBrowser: [ESC],
  toggleToolBrowser: [[ALT, Z]],
  closeAll: [[ALT, Q]],
  closeFocusedWindow: [[ALT, W]],
  focusNextWindow: [[ALT, RIGHT_ARROW]],
  focusPrevWindow: [[ALT, LEFT_ARROW]],
};
