import React from "react";
import { View } from "#library/components";
import { useStyles } from "#library/hooks";
import styles from "./styles";

const App = ({ style, ...props }) => {
	const { stylesheet } = useStyles(styles);

	return (
		<View style={[stylesheet.root, style]} {...props}>
			React DevOS
		</View>
	);
};

App.defaultProps = {
	style: {},
};

export default App;
