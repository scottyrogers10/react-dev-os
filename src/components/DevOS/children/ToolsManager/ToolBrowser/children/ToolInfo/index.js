import React from "react";
import { View } from "@library/components";
import Overview from "./Overview";
import Details from "./Details";
import styles from "./styles";

const ToolInfo = ({ selectedTool, style }) => {
  return (
    <View style={{ ...styles.view, ...style }}>
      <Overview style={styles.overview} {...selectedTool} />
      <Details style={styles.details} {...selectedTool} />
    </View>
  );
};

ToolInfo.defaultProps = {
  selectedTool: {},
  style: {},
};

export default ToolInfo;
