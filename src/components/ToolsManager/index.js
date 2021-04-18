import React from "react";
import { View } from "@library/components";
import { useStore } from "@shared/store/hooks";
import styles from "./styles";

const ToolsManager = ({ style }) => {
	const tools = useStore((store) => store.getState("configs").tools, ["configs"]);

	return <View style={{ ...styles.view, ...style }}></View>;
};

ToolsManager.defaultProps = {
	style: {},
};

export default ToolsManager;
