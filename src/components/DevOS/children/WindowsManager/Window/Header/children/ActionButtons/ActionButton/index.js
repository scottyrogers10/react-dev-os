import React from "react";
import { View } from "@library/components";
import styles from "./styles";

const ActionButton = ({ onClick, primaryColor, style }) => {
  const handleDoubleClick = (event) => event.stopPropagation();

  return <View style={{ ...styles.view({ primaryColor }), ...style }} onClick={onClick} onDoubleClick={handleDoubleClick} />;
};

ActionButton.defaultProps = {
  onClick: () => {},
  primaryColor: "",
  style: {},
};

export default ActionButton;
