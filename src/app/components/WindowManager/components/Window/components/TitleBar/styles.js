export default (_theme, { isFocused }) => ({
	root: {
		backgroundColor: isFocused ? "#383838" : "#282828",
		borderBottom: "1px solid #0f0f0f",
		borderLeft: "2px solid #696969",
		borderRadius: "10px 10px 0px 0px",
		borderRight: "2px solid #696969",
		borderTop: "2px solid #696969",
		height: "29px",
		minHeight: "29px",
		overflow: "hidden",
		padding: "0px 6px",
		pointerEvents: "auto",
	},
	title: {
		color: isFocused ? "#eaeaea" : "#696969",
		fontSize: "13px",
		fontWeight: 700,
		lineHeight: "15px",
	},
});
