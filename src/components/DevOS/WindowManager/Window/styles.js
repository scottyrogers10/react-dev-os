export default {
  view: ({ position: { x, y }, size: { width, height }, isOpaque, renderIndex }) => {
    return {
      position: "absolute",
      transform: `translate(${x}px, ${y}px)`,
      display: "flex",
      height: `${height}px`,
      width: `${width}px`,
      borderRadius: "6px",
      opacity: isOpaque ? 1.0 : 0.1,
      pointerEvents: isOpaque ? "auto" : "none",
      boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 15px -3px, 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      zIndex: renderIndex,
    };
  },
  header: {
    pointerEvents: "auto",
    minHeight: "24px",
    height: "24px",
  },
};
