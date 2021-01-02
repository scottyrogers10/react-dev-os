import { colors, css } from "@library/styles";

export default {
	view: {
		alignItems: "center",
		cursor: "pointer",
		display: "flex",
	},
	label: {
		flex: 1,
		fontSize: "12px",
		fontWeight: "600",
		color: colors.white,
		...css.userSelect.none,
		...css.textOverflow.ellipsis,
	},
};
