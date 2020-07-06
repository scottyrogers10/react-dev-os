import store from "@store";
import windowFactory from "@factories/window";

export default (attrs = {}, label = "") => {
  const createdWindow = windowFactory.create(attrs, label);
  store.dispatch("windows.add", createdWindow);
};
