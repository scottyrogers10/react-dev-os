import React from "react";
import { View } from "#library/components";
import { useStyles } from "#library/hooks";
import { WindowManager } from "./components";
import styles from "./styles";

import store from "#store";
import windows from "#procedures/windows";

const App = ({ style = {}, ...props }) => {
	const { stylesheet } = useStyles(styles);

	window.store = store;
	window.createWindow = windows.create;

	return (
		<View style={[stylesheet.root, style]} {...props}>
			<WindowManager />
		</View>
	);
};

export default App;
