export default (_theme, { isFocused }) => ({
	root: {
		alignItems: "center",
		backgroundColor: isFocused ? "#383838" : "#282828",
		borderBottom: "1px solid #0f0f0f",
		borderLeft: "1px solid #696969",
		borderRadius: "6px 6px 0px 0px",
		borderRight: "1px solid #696969",
		borderTop: "1px solid #696969",
		display: "flex",
		justifyContent: "center",
		overflow: "hidden",
		padding: "0px 6px",
	},
	title: {
		color: isFocused ? "#eaeaea" : "#696969",
		fontSize: "13px",
		fontWeight: 700,
		lineHeight: "15px",
	},
});
