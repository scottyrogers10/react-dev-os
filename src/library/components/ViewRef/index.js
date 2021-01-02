import React from "react";

const ViewRef = React.forwardRef((props, ref) => {
	return <div {...props} ref={ref} />;
});

export default ViewRef;
