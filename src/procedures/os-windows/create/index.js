import store from "@store";
import osWindowFactory from "@factories/os-window";

export default (attrs = {}) => {
  const createdOSWindow = osWindowFactory.create(attrs);

  store.dispatch("osWindows.add", createdOSWindow);
  store.dispatch("osWindows.focus", createdOSWindow.id);
};
