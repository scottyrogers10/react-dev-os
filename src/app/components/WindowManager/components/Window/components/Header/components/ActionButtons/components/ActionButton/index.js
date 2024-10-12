import React from "react";
import { View } from "#library/components";
import { useStyles } from "#library/hooks";
import styles from "./styles";

const ActionButton = ({ isFocused = false, primaryColor = "", style = {}, ...props }) => {
	const { stylesheet } = useStyles(styles, { isFocused, primaryColor });

	return <View style={[stylesheet.root, style]} {...props}></View>;
};

export default ActionButton;
