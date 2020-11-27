import React from "react";
import { Text, View } from "@library/components";
import store from "@store";
import Item from "./Item";
import styles from "./styles";

const ToolList = ({ openOSWindow, selectedIndex, style, tools, updateSelectedIndex }) => {
  const themeColors = store.getState("ui").theme.colors;

  return (
    <View style={{ ...styles.view, ...style }}>
      <Text style={styles.title}>DEV-OS TOOL BROWSER</Text>
      <View style={styles.list}>
        {tools.map((tool, index) => {
          const isSelected = selectedIndex === index;
          return (
            <Item
              style={styles.item(isSelected, themeColors)}
              index={index}
              key={`ITEM_${index}`}
              openOSWindow={openOSWindow}
              tool={tool}
              updateSelectedIndex={updateSelectedIndex}
            />
          );
        })}
      </View>
    </View>
  );
};

ToolList.defaultProps = {
  openOSWindow: () => {},
  selectedIndex: 0,
  style: {},
  tools: [],
  updateSelectedIndex: () => {},
};

export default ToolList;
