export default (_theme, { align, color, ellipsis, highlightable, letterSpacing, lineHeight, size, weight }) => ({
	root: {
		color,
		fontSize: `${size}px`,
		fontWeight: weight,
		letterSpacing: `${letterSpacing}px`,
		lineHeight: `${lineHeight}px`,
		textAlign: align,
		...(ellipsis && { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }),
		...(!highlightable && { userSelect: "none" }),
	},
});
