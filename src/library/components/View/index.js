import React from "react";
import { useLayoutProps, useStyles } from "#library/hooks";
import { Group, Stack } from "./types";
import styles from "./styles";

const View = ({ inlineStyle = {}, style = {}, ...props }) => {
	const { layoutProps, rest } = useLayoutProps(props);
	const { css, stylesheet } = useStyles(styles, { layoutProps });

	return <div className={css(stylesheet.root, style)} style={inlineStyle} {...rest} />;
};

View.Group = Group;
View.Stack = Stack;

export default View;
