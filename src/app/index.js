import React from "react";
import { View } from "#library/components";
import { useStyles } from "#library/hooks";
import { WindowManager } from "./components";
import styles from "./styles";

import store from "#store";
import windows from "#procedures/windows";

window.store = store;
window.createWindow = windows.create;

const App = ({ style = {}, ...props }) => {
	const { stylesheet } = useStyles(styles);

	return (
		<View style={[stylesheet.root, style]} {...props}>
			<WindowManager />
		</View>
	);
};

export default App;
