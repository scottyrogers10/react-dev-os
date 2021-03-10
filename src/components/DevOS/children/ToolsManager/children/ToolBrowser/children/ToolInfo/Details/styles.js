import { colors } from "@library/styles";

export default {
	view: {
		display: "flex",
		alignItems: "center",
		flexDirection: "column",
		borderTop: `1px solid ${colors.gray[700]}`,
		overflow: "hidden",
	},
	description: {
		fontSize: "12px",
		color: colors.gray[100],
		textAlign: "center",
		paddingBottom: "16px",
		maxHeight: "40px",
		overflow: "hidden",
	},
};
