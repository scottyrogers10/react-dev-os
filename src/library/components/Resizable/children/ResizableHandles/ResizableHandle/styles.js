import { css } from "@library/styles";

export default {
	view: (cursor) => {
		return {
			height: "5px",
			width: "5px",
			cursor,
			...css.defaultStyles,
		};
	},
};
