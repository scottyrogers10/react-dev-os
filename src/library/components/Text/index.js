import React from "react";
import styles from "./styles";

const Text = ({ children, style, title }) => {
	return (
		<div style={{ ...styles.view, ...style }} title={title}>
			{children}
		</div>
	);
};

Text.defaultProps = {
	children: null,
	style: {},
	title: null,
};

export default Text;
