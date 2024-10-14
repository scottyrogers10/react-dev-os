import React from "react";
import { Text, View } from "#library/components";
import { useStyles } from "#library/hooks";
import { ActionButtons } from "./components";
import { useController } from "./hooks";
import styles from "./styles";

const TitleBar = ({
	id = null,
	refs = { content: { current: null }, window: { current: null } },
	style = {},
	...props
}) => {
	const { handlers, state } = useController({ id, refs });
	const { stylesheet } = useStyles(styles, { isFocused: state.isFocused });

	return (
		<View.Group
			align={"center"}
			onDoubleClick={handlers.doubleClick}
			onMouseDown={handlers.mouseDown}
			style={[stylesheet.root, style]}
			{...props}
		>
			<ActionButtons id={id} isFocused={state.isFocused} pr={16} />
			<Text align={"center"} ellipsis={true} flex={1} mr={52} style={stylesheet.title}>
				{state.title}
			</Text>
		</View.Group>
	);
};

export default TitleBar;
