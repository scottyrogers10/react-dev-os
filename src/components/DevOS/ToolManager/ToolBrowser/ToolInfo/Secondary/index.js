import React from "react";
import { Text, View } from "@library/ui";
import styles from "./styles";

const Secondary = ({ description, style }) => {
  return (
    <View style={{ ...styles.view, ...style }}>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

Secondary.defaultProps = {
  description: "",
  style: {},
};

export default Secondary;
