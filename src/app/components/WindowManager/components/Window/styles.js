export default (_theme, { isOpaque, position: { x, y }, size: { height, width }, renderIndex }) => ({
	header: {
		height: "24px",
		minHeight: "24px",
		pointerEvents: "auto",
	},
	root: {
		borderRadius: "6px",
		boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 15px -3px, 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
		display: "flex",
		height: `${height}px`,
		opacity: isOpaque ? 1.0 : 0.1,
		pointerEvents: isOpaque ? "auto" : "none",
		position: "absolute",
		transform: `translate(${x}px, ${y}px)`,
		width: `${width}px`,
		zIndex: renderIndex,
	},
});
