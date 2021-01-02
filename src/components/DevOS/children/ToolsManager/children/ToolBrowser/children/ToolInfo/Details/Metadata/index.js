import React from "react";
import { Text, View } from "@library/components";
import styles from "./styles";

const Metadata = ({ style, type, value }) => {
	return (
		<View style={{ ...styles.view, ...style }}>
			<Text style={styles.type}>{type}</Text>
			<Text style={styles.value}>{value}</Text>
		</View>
	);
};

Metadata.defaultProps = {
	style: {},
	type: "",
	value: "",
};

export default Metadata;
