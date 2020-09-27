import React from "react";
import { View } from "@library/ui";
import Main from "./Main";
import Secondary from "./Secondary";
import styles from "./styles";

const ToolInfo = ({ selectedTool, style }) => {
  return (
    <View style={{ ...styles.view, ...style }}>
      <Main style={styles.main} {...selectedTool} />
      <Secondary style={styles.secondary} {...selectedTool} />
    </View>
  );
};

ToolInfo.defaultProps = {
  selectedTool: {},
  style: {},
};

export default ToolInfo;
