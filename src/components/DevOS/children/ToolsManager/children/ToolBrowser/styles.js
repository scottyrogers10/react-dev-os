import { colors } from "@library/styles";

export default {
	view: (center) => {
		return {
			display: "flex",
			position: "absolute",
			left: `${center - 340}px`,
			top: "120px",
			height: "366px",
			width: "680px",
			borderRadius: "12px",
			boxShadow: "rgba(0, 0, 0, 0.38) 0px 20px 20px -3px, 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
			border: `1px solid ${colors.gray[700]}`,
		};
	},
	toolList: {
		width: "270px",
		height: "100%",
	},
	toolInfo: {
		height: "100%",
		width: "410px",
		padding: "24px",
	},
};
