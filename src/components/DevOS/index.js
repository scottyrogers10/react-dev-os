import React, { useEffect } from "react";
import { View } from "@library/components";
import { useOnWindowKeyboardShortcuts } from "@library/hooks";
import store from "@store";
import { ToolsManager, WindowsManager } from "./children";
import { getShortcuts } from "./helpers";
import styles from "./styles";
import "./stylesheet.css";

const DevOS = ({ hotKeys, style, themeColors, tools }) => {
	useOnWindowKeyboardShortcuts(getShortcuts(hotKeys));

	useEffect(() => {
		themeColors && store.dispatch("ui.updateTheme", { colors: themeColors });
	}, []);

	return (
		<View className={"devOS"} style={{ ...styles.view, ...style }}>
			<ToolsManager tools={tools} />
			<WindowsManager />
		</View>
	);
};

DevOS.defaultProps = {
	hotKeys: {},
	style: {},
	themeColors: null,
	tools: [],
};

export default DevOS;
