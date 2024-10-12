import React from "react";
import { View } from "#library/components";
import { useStyles } from "#library/hooks";
import { ActionButton } from "./components";
import styles from "./styles";

const ActionButtons = ({ isFocused = false, style = {}, ...props }) => {
	const { stylesheet } = useStyles(styles);

	return (
		<View.Group style={[stylesheet.root, style]} {...props}>
			<ActionButton isFocused={isFocused} mr={6} primaryColor={"#ed6a5e"} />
			<ActionButton isFocused={isFocused} mr={6} primaryColor={"#f5bf4f"} />
			<ActionButton isFocused={isFocused} primaryColor={"#61c554"} />
		</View.Group>
	);
};

export default ActionButtons;
