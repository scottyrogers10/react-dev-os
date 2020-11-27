import store from "@store";
import { osWindow as osWindowFactory } from "@factories";

export default (attrs = {}) => {
  const createdOSWindow = osWindowFactory.create(attrs);

  store.dispatch("osWindows.add", createdOSWindow);
  store.dispatch("osWindows.focus", createdOSWindow.id);
};
