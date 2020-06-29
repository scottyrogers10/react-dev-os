export default {
  view: ({ position: { x, y }, size: { width, height }, isOpaque }) => {
    return {
      position: "absolute",
      left: `${x}px`,
      top: `${y}px`,
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      height: `${height}px`,
      width: `${width}px`,
      borderRadius: "6px",
      opacity: isOpaque ? 1.0 : 0.1,
      boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 15px -3px, 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    };
  },
  header: {
    minHeight: "22px",
    height: "22px",
  },
};
