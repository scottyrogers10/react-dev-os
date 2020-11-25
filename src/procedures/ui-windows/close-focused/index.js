import store from "@store";
import { uiWindows } from "@procedures";

export default () => {
  const { focusedId } = store.getState("uiWindows");
  const { isOpen } = store.getState("toolBrowser");
  !isOpen && uiWindows.close(focusedId);
};
