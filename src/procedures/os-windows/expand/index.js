import store from "@store";

export default (id) => {
  const hasVerticalScrollBar = document.body.clientWidth < window.innerWidth;
  const hasHorizontalScrollBar = document.body.clientHeight < window.innerHeight;

  const height = hasHorizontalScrollBar
    ? window.innerHeight - (window.innerHeight - document.body.clientHeight)
    : window.innerHeight;

  const width = hasVerticalScrollBar
    ? window.innerWidth - (window.innerWidth - document.body.clientWidth)
    : window.innerWidth;

  store.dispatch("osWindows.update", { id, position: { x: 0, y: 0 }, size: { height, width } });
};
