import React from "react";
import { View } from "@library/components";
import { useStore } from "@tools/hooks";
import Window from "./Window";
import styles from "./styles";

const WindowsManager = ({ style }) => {
	const osWindowIds = useStore((store) => store.getState("osWindows").ids);

	return (
		<View style={{ ...styles.view, ...style }}>
			{osWindowIds.map((osWindowId) => {
				return <Window key={`WINDOW_${osWindowId}`} id={osWindowId} />;
			})}
		</View>
	);
};

WindowsManager.defaultProps = {
	style: {},
};

export default WindowsManager;
