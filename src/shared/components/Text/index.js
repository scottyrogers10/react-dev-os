import React from "react";
import styles from "./styles";

const Text = ({ children, style, ...props }) => {
	return (
		<div style={{ ...styles.view, ...style }} {...props}>
			{children}
		</div>
	);
};

Text.defaultProps = {
	children: null,
	style: {},
};

export default Text;
