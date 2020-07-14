import React from "react";
import { View } from "@library/ui";
import styles from "./styles";

const ActionButton = ({ onClick, primaryColor, style }) => {
  const handleDoubleClick = (event) => event.stopPropagation();
  const handleMouseDown = (event) => event.stopPropagation();

  return (
    <View
      style={{ ...styles.view({ primaryColor }), ...style }}
      onClick={onClick}
      onDoubleClick={handleDoubleClick}
      onMouseDown={handleMouseDown}
    />
  );
};

ActionButton.defaultProps = {
  onClick: () => {},
  primaryColor: "",
  style: {},
};

export default ActionButton;
