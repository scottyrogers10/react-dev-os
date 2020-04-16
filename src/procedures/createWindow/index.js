import store from "store";
import windowFactory from "factories/window";

export default (attrs = {}) => {
  const createdWindow = windowFactory.create(attrs);
  store.dispatch("windows.initializeWindow", createdWindow);
};
