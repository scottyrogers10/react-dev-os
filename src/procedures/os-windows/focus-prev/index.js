import store from "@store";

export default () => {
  const isToolBrowserOpen = store.getState("toolBrowser").isOpen;
  const { focusedId, ids } = store.getState("osWindows");

  if (!isToolBrowserOpen && ids.length > 0) {
    const currentIndex = ids.indexOf(focusedId);
    const prevIndex = currentIndex - 1;

    if (prevIndex >= 0) {
      const prevId = ids[prevIndex];
      store.dispatch("osWindows.focus", prevId);
    } else {
      const lastId = ids[ids.length - 1];
      store.dispatch("osWindows.focus", lastId);
    }
  }
};
