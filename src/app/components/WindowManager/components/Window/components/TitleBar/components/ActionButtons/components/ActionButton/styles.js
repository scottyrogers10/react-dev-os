export default (_theme, { isFocused, primaryColor }) => ({
	root: {
		backgroundColor: isFocused ? primaryColor : "#4c4c4c",
		borderRadius: "50%",
		height: "12px",
		width: "12px",
	},
});
