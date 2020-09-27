import React from "react";
import { View } from "@library/ui";
import styles from "./styles";

const Item = ({ label, openWindow, style, window }) => {
  const handleClick = () => openWindow(window);

  return (
    <View style={{ ...styles.view, ...style }} onClick={handleClick}>
      {label}
    </View>
  );
};

Item.defaultProps = {
  label: "",
  openWindow: () => {},
  style: {},
  window: {},
};

export default Item;
