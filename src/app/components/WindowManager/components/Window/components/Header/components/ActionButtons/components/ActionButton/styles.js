export default ({ colors }, { isFocused, primaryColor }) => ({
	root: {
		backgroundColor: isFocused ? primaryColor : colors.gray[550],
		borderRadius: "50%",
		height: "12px",
		width: "12px",
	},
});
