import React from "react";
import { View } from "#library/components";
import { useStyles } from "#library/hooks";
import { ActionButton } from "./components";
import { useController } from "./hooks";
import styles from "./styles";

const ActionButtons = ({ id = null, isFocused = false, style = {}, ...props }) => {
	const { handlers } = useController(id);
	const { stylesheet } = useStyles(styles);

	return (
		<View.Group style={[stylesheet.root, style]} {...props}>
			<ActionButton onClick={handlers.close} isFocused={isFocused} mr={8} primaryColor={"#ed6a5e"} />
			<ActionButton onClick={handlers.minimize} isFocused={isFocused} mr={8} primaryColor={"#f5bf4f"} />
			<ActionButton onClick={handlers.toggleExpand} isFocused={isFocused} primaryColor={"#61c554"} />
		</View.Group>
	);
};

export default ActionButtons;
