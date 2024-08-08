import React from "react";
import { View } from "#library/components";
import { useStyles } from "#library/hooks";
import styles from "./styles";

const Stack = ({ align, justify, style, ...props }) => {
	const { styleSheet } = useStyles(styles);

	return (
		<View
			align={align}
			display={"flex"}
			flexDirection={"column"}
			justify={justify}
			style={[styleSheet.root, style]}
			{...props}
		/>
	);
};

Stack.defaultProps = {
	align: "stretch",
	justify: "flex-start",
	style: {},
};

export default Stack;
