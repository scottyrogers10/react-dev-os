import React from "react";
import { ViewRef } from "#library/components";
import { useStyles } from "#library/hooks";
import { ResizeHandles } from "./components";
import { useController } from "./hooks";
import styles from "./styles";

const Resizable = ({
	children = null,
	minSize = { height: 1, width: 1 },
	onResize = () => {},
	onResizeEnd = () => {},
	onResizeStart = () => {},
	style = {},
	...props
}) => {
	const { handlers, refs } = useController({ minSize, onResize, onResizeEnd, onResizeStart });
	const { stylesheet } = useStyles(styles);

	return (
		<ViewRef ref={refs.resizable} style={[stylesheet.root, style]} {...props}>
			<ResizeHandles onResize={handlers.resize} onResizeEnd={handlers.resizeEnd} onResizeStart={handlers.resizeStart} />
			{children}
		</ViewRef>
	);
};

export default Resizable;
