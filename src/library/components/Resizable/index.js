import React from "react";
import { ViewRef } from "#library/components";
import { useStyles } from "#library/hooks";
import styles from "./styles";

const Resizable = ({ style = {}, ...props }) => {
	const { stylesheet } = useStyles(styles);

	return <ViewRef style={[stylesheet.root, style]} {...props} />;
};

export default Resizable;
