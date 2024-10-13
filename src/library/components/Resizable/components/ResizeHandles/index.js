import React from "react";
import { useStyles } from "#library/hooks";
import { ResizeHandle } from "./components";
import styles from "./styles";

const ResizeHandles = ({ onResize = () => {}, onResizeEnd = () => {}, onResizeStart = () => {} }) => {
	const { stylesheet } = useStyles(styles);

	return (
		<>
			<ResizeHandle
				onResize={onResize}
				onResizeEnd={onResizeEnd}
				onResizeStart={onResizeStart}
				position={"bottom"}
				style={stylesheet.bottom}
			/>
			<ResizeHandle
				onResize={onResize}
				onResizeEnd={onResizeEnd}
				onResizeStart={onResizeStart}
				position={"bottomLeft"}
				style={stylesheet.bottomLeft}
			/>
			<ResizeHandle
				onResize={onResize}
				onResizeEnd={onResizeEnd}
				onResizeStart={onResizeStart}
				position={"bottomRight"}
				style={stylesheet.bottomRight}
			/>
			<ResizeHandle
				onResize={onResize}
				onResizeEnd={onResizeEnd}
				onResizeStart={onResizeStart}
				position={"left"}
				style={stylesheet.left}
			/>
			<ResizeHandle
				onResize={onResize}
				onResizeEnd={onResizeEnd}
				onResizeStart={onResizeStart}
				position={"right"}
				style={stylesheet.right}
			/>
			<ResizeHandle
				onResize={onResize}
				onResizeEnd={onResizeEnd}
				onResizeStart={onResizeStart}
				position={"top"}
				style={stylesheet.top}
			/>
			<ResizeHandle
				onResize={onResize}
				onResizeEnd={onResizeEnd}
				onResizeStart={onResizeStart}
				position={"topLeft"}
				style={stylesheet.topLeft}
			/>
			<ResizeHandle
				onResize={onResize}
				onResizeEnd={onResizeEnd}
				onResizeStart={onResizeStart}
				position={"topRight"}
				style={stylesheet.topRight}
			/>
		</>
	);
};

export default ResizeHandles;
