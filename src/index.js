import React from "react";
import { View } from "@library/components";
import { useOnMount } from "@library/hooks";
import { ToolsManager } from "./components";
import { init } from "./procedures";
import styles from "./styles";

const DevOS = ({ tools }) => {
	useOnMount(() => init({ tools }));

	return (
		<View style={styles.view}>
			<ToolsManager />
		</View>
	);
};

DevOS.defaultProps = {
	tools: [],
};

export default DevOS;
