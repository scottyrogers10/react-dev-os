import store from "@store";
import uiWindowFactory from "@factories/ui-window";

export default (attrs = {}) => {
  const createdUIWindow = uiWindowFactory.create(attrs);

  store.dispatch("uiWindows.add", createdUIWindow);
  store.dispatch("uiWindows.focus", createdUIWindow.id);
};
