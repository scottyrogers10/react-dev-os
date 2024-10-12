import React from "react";
import { ViewRef } from "#library/components";
import { useStyles } from "#library/hooks";
import styles from "./styles";

const Group = React.forwardRef(({ align = "flex-start", justify = "flex-start", style = {}, ...props }, ref) => {
	const { stylesheet } = useStyles(styles);

	return (
		<ViewRef
			align={align}
			display={"flex"}
			flexDirection={"row"}
			justify={justify}
			ref={ref}
			style={[stylesheet.root, style]}
			{...props}
		/>
	);
});

export default Group;
