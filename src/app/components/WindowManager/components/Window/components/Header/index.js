import React from "react";
import { Text, View } from "#library/components";
import { useStyles } from "#library/hooks";
import theme from "#library/theme";
import { ActionButtons } from "./components";
import styles from "./styles";

const Header = ({ style = {}, ...props }) => {
	const isFocused = true;
	const title = "Test Window";
	const { stylesheet } = useStyles(styles, { isFocused });

	return (
		<View style={[stylesheet.root, style]} {...props}>
			<ActionButtons isFocused={isFocused} pr={16} />
			<Text
				align={"center"}
				color={theme.colors.gray[50]}
				ellipsis={true}
				flex={1}
				lineHeight={15}
				mr={32}
				pr={16}
				size={13}
			>
				{title}
			</Text>
		</View>
	);
};

export default Header;
