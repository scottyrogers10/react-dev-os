import React from "react";
import { View } from "#library/components";
import { useStyles } from "#library/hooks";
import { Window } from "./components";
import { useController } from "./hooks";
import styles from "./styles";

const WindowManager = ({ style = {}, ...props }) => {
	const { state } = useController();
	const { stylesheet } = useStyles(styles);

	return (
		<View style={[stylesheet.root, style]} {...props}>
			{state.windowIds.map((id) => (
				<Window id={id} key={`WINDOW_${id}`} />
			))}
		</View>
	);
};

export default WindowManager;
