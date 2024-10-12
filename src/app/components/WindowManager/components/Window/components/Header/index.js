import React from "react";
import { Text, View } from "#library/components";
import { useStyles } from "#library/hooks";
import { ActionButtons } from "./components";
import { useController } from "./hooks";
import styles from "./styles";

const Header = ({ id = null, style = {}, ...props }) => {
	const { state } = useController(id);
	const { stylesheet } = useStyles(styles, { isFocused: state.isFocused });

	return (
		<View style={[stylesheet.root, style]} {...props}>
			<ActionButtons isFocused={state.isFocused} pr={16} />
			<Text align={"center"} ellipsis={true} flex={1} mr={32} pr={16} style={stylesheet.title}>
				{state.title}
			</Text>
		</View>
	);
};

export default Header;
