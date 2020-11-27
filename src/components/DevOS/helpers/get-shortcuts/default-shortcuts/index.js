import store from "@store";
import { osWindows } from "@procedures";

const ALT = 18;
const ESC = 27;
const LEFT_ARROW = 37;
const RIGHT_ARROW = 39;
const Q = 81;
const W = 87;
const Z = 90;

const handleCloseToolBrowser = () => store.dispatch("toolBrowser.close");
const handleToggleToolBrowser = () => store.dispatch("toolBrowser.toggle");

const handleCloseAll = () => {
  store.dispatch("toolBrowser.close");
  store.dispatch("osWindows.removeAll");
};

const handleCloseFocusedWindow = () => osWindows.closeFocused();
const handleFocusNextWindow = () => osWindows.focusNext();
const handleFocusPrevWindow = () => osWindows.focusPrev();

export default {
  closeToolBrowser: { keyBindings: [ESC], onShortcut: handleCloseToolBrowser },
  toggleToolBrowser: { keyBindings: [[ALT, Z]], onShortcut: handleToggleToolBrowser },
  closeAll: { keyBindings: [[ALT, Q]], onShortcut: handleCloseAll },
  closeFocusedWindow: { keyBindings: [[ALT, W]], onShortcut: handleCloseFocusedWindow },
  focusNextWindow: { keyBindings: [[ALT, RIGHT_ARROW]], onShortcut: handleFocusNextWindow },
  focusPrevWindow: { keyBindings: [[ALT, LEFT_ARROW]], onShortcut: handleFocusPrevWindow },
};
