import React from "react";
import { View } from "#library/components";
import { useStyles } from "#library/hooks";
import { TitleBar } from "./components";
import { useController } from "./hooks";
import styles from "./styles";

const Window = ({ id = null, style = {}, ...props }) => {
	const { state } = useController(id);
	const { stylesheet } = useStyles(styles, state.window);

	return (
		<View style={[stylesheet.root, style]} {...props}>
			<TitleBar flex={1} id={id} style={stylesheet.titleBar} />
		</View>
	);
};

export default Window;
