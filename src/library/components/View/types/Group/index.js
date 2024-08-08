import React from "react";
import { View } from "#library/components";
import { useStyles } from "#library/hooks";
import styles from "./styles";

const Group = ({ align, justify, style, ...props }) => {
	const { styleSheet } = useStyles(styles);

	return (
		<View
			align={align}
			display={"flex"}
			flexDirection={"row"}
			justify={justify}
			style={[styleSheet.root, style]}
			{...props}
		/>
	);
};

Group.defaultProps = {
	align: "flex-start",
	justify: "flex-start",
	style: {},
};

export default Group;
