import store from "@store";

export default (id) => {
  const { contractPosition, contractSize, position, size } = store.getState("osWindows").byId[id];

  const hasVerticalScrollBar = document.body.clientWidth < window.innerWidth;
  const hasHorizontalScrollBar = document.body.clientHeight < window.innerHeight;

  const height = hasHorizontalScrollBar
    ? window.innerHeight - (window.innerHeight - document.body.clientHeight)
    : window.innerHeight;

  const width = hasVerticalScrollBar
    ? window.innerWidth - (window.innerWidth - document.body.clientWidth)
    : window.innerWidth;

  const isExpanded = size.height === height && size.width === width && position.x === 0 && position.y === 0;

  isExpanded
    ? store.dispatch("osWindows.update", { id, position: contractPosition, size: contractSize })
    : store.dispatch("osWindows.update", {
        contractPosition: position,
        contractSize: size,
        id,
        position: { x: 0, y: 0 },
        size: { height, width },
      });
};
