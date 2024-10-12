import React from "react";
import { View } from "#library/components";
import { useStyles } from "#library/hooks";
import theme from "#library/theme";
import { ActionButton } from "./components";
import styles from "./styles";

const ActionButtons = ({ isFocused = false, style = {}, ...props }) => {
	const { stylesheet } = useStyles(styles);

	return (
		<View.Group style={[stylesheet.root, style]} {...props}>
			<ActionButton isFocused={isFocused} mr={6} primaryColor={theme.colors.red[500]} />
			<ActionButton isFocused={isFocused} mr={6} primaryColor={theme.colors.yellow[700]} />
			<ActionButton isFocused={isFocused} primaryColor={theme.colors.green[500]} />
		</View.Group>
	);
};

export default ActionButtons;
