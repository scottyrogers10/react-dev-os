import React from "react";
import { ViewRef } from "#library/components";
import { useStyles } from "#library/hooks";
import { Content, Frame, TitleBar } from "./components";
import { useController } from "./hooks";
import styles from "./styles";

const Window = ({ id = null, style = {}, ...props }) => {
	const { handlers, refs, state } = useController(id);
	const { stylesheet } = useStyles(styles, state.window);

	return (
		<ViewRef
			inlineStyle={state.inlineStyle}
			onMouseDown={handlers.mouseDown}
			ref={refs.window}
			style={[stylesheet.root, style]}
			{...props}
		>
			<Frame id={id} minSize={state.window.minSize} refs={refs}>
				<TitleBar id={id} refs={refs} />
				<Content id={id} ref={refs.content} />
			</Frame>
		</ViewRef>
	);
};

export default Window;
