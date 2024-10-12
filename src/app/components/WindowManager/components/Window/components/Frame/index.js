import React from "react";
import { Resizable } from "#library/components";
import { useStyles } from "#library/hooks";
import styles from "./styles";

const Frame = ({
	children = null,
	id = null,
	minSize = { height: 0, width: 0 },
	refs = { content: { current: null }, window: { current: null } },
	style = {},
	...props
}) => {
	const { stylesheet } = useStyles(styles);

	return (
		<Resizable style={[stylesheet.root, style]} {...props}>
			{children}
		</Resizable>
	);
};

export default Frame;
