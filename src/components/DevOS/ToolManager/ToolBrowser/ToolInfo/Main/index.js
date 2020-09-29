import React from "react";
import { Text, View } from "@library/ui";
import DefaultIcon from "./DefaultIcon";
import styles from "./styles";

const Main = ({ icon, label, style, version }) => {
  const Icon = icon || DefaultIcon;

  return (
    <View style={{ ...styles.view, ...style }}>
      <View style={styles.icon}>
        <Icon />
      </View>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.version}>{`Version: ${version}`}</Text>
    </View>
  );
};

Main.defaultProps = {
  icon: null,
  label: "",
  style: {},
  version: "",
};

export default Main;
