import React from "react";
import { View } from "#library/components";
import { useStyles } from "#library/hooks";
import { ToolBrowser } from "./components";
import { useController } from "./hooks";
import styles from "./styles";

const ToolManager = ({ style = {}, tools = [], ...props }) => {
	const { state } = useController(tools);
	const { stylesheet } = useStyles(styles);

	return (
		<View style={[stylesheet.root, style]} {...props}>
			{state.isBrowserOpen && <ToolBrowser tools={state.tools} />}
		</View>
	);
};

export default ToolManager;
