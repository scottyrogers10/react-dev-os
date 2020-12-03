import React from "react";
import { Text, View } from "@library/components";
import HotKeyLabel from "./HotKeyLabel";
import styles from "./styles";

const Item = ({ index, openOSWindow, style, tool, updateSelectedIndex }) => {
  const handleClick = () => openOSWindow(tool.window);
  const handleMouseOver = () => updateSelectedIndex(index);

  return (
    <View style={{ ...styles.view, ...style }} onClick={handleClick} onMouseOver={handleMouseOver}>
      <Text style={styles.label}>{tool.label}</Text>
      <HotKeyLabel hotKeys={tool.hotKeys} />
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
