import React from "react";
import { View } from "@library/components";
import styles from "./styles";

const Label = ({ style, value }) => {
	return <View style={{ ...styles.view, ...style }}>{value}</View>;
};

Label.defaultProps = {
	style: {},
	value: "",
};

export default Label;
