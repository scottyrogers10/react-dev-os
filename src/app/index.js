import React from "react";
import { View } from "#library/components";
import { useStyles } from "#library/hooks";
import { ToolManager, WindowManager } from "./components";
import styles from "./styles";

import { windows } from "#core";
import store from "#store";

window.store = store;
window.createWindow = windows.create;

const App = ({ style = {}, tools = [], ...props }) => {
	const { stylesheet } = useStyles(styles);

	return (
		<View style={[stylesheet.root, style]} {...props}>
			<ToolManager tools={tools} />
			<WindowManager />
		</View>
	);
};

export default App;
