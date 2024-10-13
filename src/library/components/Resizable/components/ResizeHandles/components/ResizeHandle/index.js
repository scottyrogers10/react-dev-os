import React from "react";
import { View } from "#library/components";
import { useStyles } from "#library/hooks";
import { useController } from "./hooks";
import styles from "./styles";

const ResizeHandle = ({
	onResize = () => {},
	onResizeEnd = () => {},
	onResizeStart = () => {},
	position = "",
	style = {},
	...props
}) => {
	const { handlers, state } = useController({ onResize, onResizeEnd, onResizeStart, position });
	const { stylesheet } = useStyles(styles, state);

	return <View draggable={false} onMouseDown={handlers.mouseDown} style={[stylesheet.root, style]} {...props} />;
};

export default ResizeHandle;
