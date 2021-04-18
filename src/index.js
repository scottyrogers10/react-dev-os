import React from "react";
import { View } from "@shared/components";
import styles from "./styles";

const DevOS = ({ style }) => {
	return <View style={{ ...styles.view, ...style }}></View>;
};

DevOS.defaultProps = {
	style: {},
};

export default DevOS;
