import React from "react";
import { View } from "#library/components";
import { useStyles } from "#library/hooks";
import { useController } from "./hooks";
import styles from "./styles";

const ActionButton = ({ isFocused = false, onClick = () => {}, primaryColor = "", style = {}, ...props }) => {
	const { handlers } = useController(onClick);
	const { stylesheet } = useStyles(styles, { isFocused, primaryColor });

	return (
		<View onClick={handlers.click} onDoubleClick={handlers.doubleClick} style={[stylesheet.root, style]} {...props} />
	);
};

export default ActionButton;
