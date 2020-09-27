import React from "react";
import { Text, View } from "@library/ui";
import styles from "./styles";

const Main = ({ label, style, version }) => {
  return (
    <View style={{ ...styles.view, ...style }}>
      <View style={styles.icon}></View>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.version}>{`Version: ${version}`}</Text>
    </View>
  );
};

Main.defaultProps = {
  label: "",
  style: {},
  version: "",
};

export default Main;
