import React from "react";
import { View } from "@library/components";
import styles from "./styles";

const Item = ({ index, openUIWindow, style, tool, updateSelectedIndex }) => {
  const handleClick = () => openUIWindow(tool.window);
  const handleMouseOver = () => updateSelectedIndex(index);

  return (
    <View style={{ ...styles.view, ...style }} onClick={handleClick} onMouseOver={handleMouseOver}>
      {tool.label}
    </View>
  );
};

Item.defaultProps = {
  index: 0,
  openUIWindow: () => {},
  style: {},
  tool: {},
  updateSelectedIndex: () => {},
};

export default Item;
