import React from "react";
import styles from "./styles";

const View = ({ style, ...props }) => {
	return <div style={{ ...styles.view, ...style }} {...props} />;
};

View.defaultProps = {
	style: {},
};

export default View;
