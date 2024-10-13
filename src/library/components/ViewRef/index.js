import React from "react";
import { useLayoutProps, useStyles } from "#library/hooks";
import { Group, Stack } from "./types";
import styles from "./styles";

const ViewRef = React.forwardRef(({ inlineStyle = {}, style = {}, ...props }, ref) => {
	const { layoutProps, rest } = useLayoutProps(props);
	const { css, stylesheet } = useStyles(styles, { layoutProps });

	return <div className={css(stylesheet.root, style)} ref={ref} style={inlineStyle} {...rest} />;
});

ViewRef.Group = Group;
ViewRef.Stack = Stack;

export default ViewRef;
