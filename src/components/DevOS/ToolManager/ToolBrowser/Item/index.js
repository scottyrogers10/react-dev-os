import React, { useState } from "react";
import { View } from "@library/ui";
import { useOnWindowEvent } from "@library/hooks";
import styles from "./styles";

const Item = ({ closeWindow, configs, createWindow, index, label, style }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleMouseDown = () => setIsSelected(true);
  const handleMouseUp = () => {
    setIsSelected(false);
    closeWindow();
    createWindow(configs);
  };

  useOnWindowEvent("mouseup", () => setIsSelected(false));

  return (
    <View
      style={{ ...styles.view, ...style, ...styles.stripe(index), ...styles.selected(isSelected) }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {label}
    </View>
  );
};

Item.defaultProps = {
  closeWindow: () => {},
  configs: {},
  createWindow: () => {},
  index: 0,
  label: "",
  style: {},
};

export default Item;
