import React from "react";
import { View } from "#library/components";
import { useStyles } from "#library/hooks";
import { Header } from "./components";
import { useController } from "./hooks";
import styles from "./styles";

const Window = ({ id = null, style = {}, ...props }) => {
	const { state } = useController(id);
	const { stylesheet } = useStyles(styles, state.window);

	return (
		<View style={[stylesheet.root, style]} {...props}>
			<Header flex={1} style={stylesheet.header} />
		</View>
	);
};

export default Window;
