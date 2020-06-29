import React from "react";
import { View } from "@library/ui";
import styles from "./styles";

const ActionButton = ({ onClick, primaryColor, style }) => {
  return <View style={{ ...styles.view({ primaryColor }), ...style }} onClick={onClick} />;
};

ActionButton.defaultProps = {
  onClick: () => {},
  primaryColor: "",
  style: {},
};

export default ActionButton;
