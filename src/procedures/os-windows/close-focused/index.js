import store from "@store";
import { osWindows } from "@procedures";

export default () => {
  const { focusedId } = store.getState("osWindows");
  const { isOpen } = store.getState("toolBrowser");
  !isOpen && osWindows.close(focusedId);
};
