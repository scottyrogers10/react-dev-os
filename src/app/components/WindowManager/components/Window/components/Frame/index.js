import React from "react";
import { Resizable } from "#library/components";
import { useStyles } from "#library/hooks";
import { useController } from "./hooks";
import styles from "./styles";

const Frame = ({
	children = null,
	id = null,
	minSize = { height: 0, width: 0 },
	refs = { content: { current: null }, window: { current: null } },
	style = {},
	...props
}) => {
	const { handlers } = useController({ id, refs });
	const { stylesheet } = useStyles(styles);

	return (
		<Resizable
			minSize={minSize}
			onResize={handlers.resize}
			onResizeEnd={handlers.resizeEnd}
			onResizeStart={handlers.resizeStart}
			style={[stylesheet.root, style]}
			{...props}
		>
			{children}
		</Resizable>
	);
};

export default Frame;
