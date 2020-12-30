import React from "react";
import { View } from "@library/components";
import icon from "./assets/icon-128x128.png";
import styles from "./styles";

const DefaultIcon = ({ style }) => {
  return (
    <View style={{ ...styles.view, ...style }}>
      <img height={"96px"} width={"96px"} src={icon} />
    </View>
  );
};

DefaultIcon.defaultProps = {
  style: {},
};

export default DefaultIcon;
