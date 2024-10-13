import React from "react";
import { Text, View, ViewRef } from "#library/components";
import { useStyles } from "#library/hooks";
import styles from "./styles";

const Content = React.forwardRef(({ id = null, style = {}, ...props }, ref) => {
	const { stylesheet } = useStyles(styles);

	return (
		<View style={[stylesheet.root, style]} {...props}>
			<ViewRef ref={ref} style={stylesheet.inner}></ViewRef>
		</View>
	);
});

export default Content;
