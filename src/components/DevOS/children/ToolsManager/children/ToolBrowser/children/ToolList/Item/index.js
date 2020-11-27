import React from "react";
import { View } from "@library/components";
import styles from "./styles";

const Item = ({ index, openOSWindow, style, tool, updateSelectedIndex }) => {
  const handleClick = () => openOSWindow(tool.window);
  const handleMouseOver = () => updateSelectedIndex(index);

  return (
    <View style={{ ...styles.view, ...style }} onClick={handleClick} onMouseOver={handleMouseOver}>
      {tool.label}
    </View>
  );
};

Item.defaultProps = {
  index: 0,
  openOSWindow: () => {},
  style: {},
  tool: {},
  updateSelectedIndex: () => {},
};

export default Item;
