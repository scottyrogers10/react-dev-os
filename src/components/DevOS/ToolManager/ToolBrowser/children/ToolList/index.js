import React from "react";
import { Text, View } from "@library/ui";
import store from "@store";
import Item from "./Item";
import styles from "./styles";

const ToolList = ({ openWindow, selectedIndex, style, tools }) => {
  const themeColors = store.getState("ui").theme.colors;

  return (
    <View style={{ ...styles.view, ...style }}>
      <Text style={styles.title}>DEV-OS TOOL BROWSER</Text>
      <View style={styles.list}>
        {tools.map((tool, index) => {
          const isSelected = selectedIndex === index;
          return <Item style={styles.item(isSelected, themeColors)} key={`ITEM_${index}`} openWindow={openWindow} {...tool} />;
        })}
      </View>
    </View>
  );
};

ToolList.defaultProps = {
  openWindow: () => {},
  selectedIndex: 0,
  style: {},
  tools: [],
};

export default ToolList;
