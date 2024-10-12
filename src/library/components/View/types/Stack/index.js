import React from "react";
import { View } from "#library/components";
import { useStyles } from "#library/hooks";
import styles from "./styles";

const Stack = ({ align = "stretch", justify = "flex-start", style = {}, ...props }) => {
	const { stylesheet } = useStyles(styles);

	return (
		<View
			align={align}
			display={"flex"}
			flexDirection={"column"}
			justify={justify}
			style={[stylesheet.root, style]}
			{...props}
		/>
	);
};

export default Stack;
