import { css as merge, StyleSheet } from "aphrodite/no-important";
import theme from "#library/theme";
import { flattenStyles } from "#library/utils/styles";

export default (styles, params = {}) => {
	const css = (...args) => {
		const flattenedStyles = args.reduce((prevVal, currVal) => {
			return [...prevVal, ...flattenStyles(currVal)];
		}, []);

		return merge(...flattenedStyles);
	};

	const stylesheet =
		typeof styles === "function" ? StyleSheet.create(styles(theme, params)) : StyleSheet.create(styles);

	return { css, stylesheet };
};
