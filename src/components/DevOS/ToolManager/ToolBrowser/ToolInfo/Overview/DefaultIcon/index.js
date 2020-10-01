import React from "react";
import { View } from "@library/ui";
import icon from "./assets/icon-96x96.png";
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