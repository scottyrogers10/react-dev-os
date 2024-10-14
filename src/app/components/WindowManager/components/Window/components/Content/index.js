import React, { memo } from "react";
import { View, ViewRef } from "#library/components";
import { useStyles } from "#library/hooks";
import { useController } from "./hooks";
import styles from "./styles";

const Content = React.forwardRef(({ id = null, style = {}, ...props }, ref) => {
	const { devOS, inlineStyles, state } = useController(id);
	const { stylesheet } = useStyles(styles);
	const Component = memo(state.window.component);

	return (
		<View inlineStyle={inlineStyles.root} style={[stylesheet.root, style]} {...props}>
			<ViewRef ref={ref} style={stylesheet.inner}>
				<Component devOS={devOS} />
			</ViewRef>
		</View>
	);
});

export default Content;
