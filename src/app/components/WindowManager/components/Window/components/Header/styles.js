export default ({ colors }, { isFocused }) => ({
	root: {
		alignItems: "center",
		backgroundColor: isFocused ? colors.gray[800] : colors.gray[750],
		borderLeft: `1px solid ${colors.gray[600]}`,
		borderRadius: "6px 6px 0px 0px",
		borderRight: `1px solid ${colors.gray[600]}`,
		borderTop: `1px solid ${colors.gray[600]}`,
		display: "flex",
		justifyContent: "center",
		overflow: "hidden",
		padding: "0px 6px",
	},
});
