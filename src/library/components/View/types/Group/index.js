import React from "react";
import { View } from "#library/components";
import { useStyles } from "#library/hooks";
import styles from "./styles";

const Group = ({ align = "flex-start", justify = "flex-start", style = {}, ...props }) => {
	const { stylesheet } = useStyles(styles);

	return (
		<View
			align={align}
			display={"flex"}
			flexDirection={"row"}
			justify={justify}
			style={[stylesheet.root, style]}
			{...props}
		/>
	);
};

export default Group;
