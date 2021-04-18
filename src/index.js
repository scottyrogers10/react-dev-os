import React from "react";
import { View } from "@library/components";
import { useOnMount } from "@library/hooks";
import store from "@shared/store";
import { ToolsManager } from "./components";
import styles from "./styles";

const DevOS = ({ tools }) => {
	useOnMount(() => store.dispatch("configs.merge", { tools }));

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
