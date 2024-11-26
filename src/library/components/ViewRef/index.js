import React from "react";
import { useLayoutProps, useStyles } from "#library/hooks";
import styles from "./styles";
import { Group, Stack } from "./types";

const ViewRef = React.forwardRef(({ inlineStyle = {}, style = {}, ...props }, ref) => {
	const { layoutProps, rest } = useLayoutProps(props);
	const { css, stylesheet } = useStyles(styles, { layoutProps });

	return <div className={css(stylesheet.root, style)} ref={ref} style={inlineStyle} {...rest} />;
});

ViewRef.Group = Group;
ViewRef.Stack = Stack;

export default ViewRef;
