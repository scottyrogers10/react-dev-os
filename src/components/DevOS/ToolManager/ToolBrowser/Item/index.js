import React, { useState } from "react";
import { View } from "@library/ui";
import { useOnWindowEvent } from "@library/hooks";
import createWindow from "@procedures/windows/create";
import styles from "./styles";

const Item = ({ configs, index, label, style }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleMouseDown = () => setIsSelected(true);
  const handleMouseUp = () => {
    setIsSelected(false);
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
  configs: {},
  index: 0,
  label: "",
  style: {},
};

export default Item;
