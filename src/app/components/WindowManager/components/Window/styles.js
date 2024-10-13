export default (_theme, { isOpaque, position: { x, y }, size: { height, width }, renderIndex }) => ({
	root: {
		borderRadius: "10px",
		boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 15px -3px, 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
		display: "flex",
		opacity: isOpaque ? 1.0 : 0.1,
		pointerEvents: isOpaque ? "auto" : "none",
		position: "absolute",
		zIndex: renderIndex,
	},
});
