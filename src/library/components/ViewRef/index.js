import React from "react";
import styles from "./styles";

const ViewRef = React.forwardRef(({ style, ...props }, ref) => {
	return <div style={{ ...styles.view, ...style }} {...props} ref={ref} />;
});

ViewRef.defaultProps = {
	style: {},
};

export default ViewRef;
