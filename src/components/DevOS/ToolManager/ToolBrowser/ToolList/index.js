import React from "react";
import { Text, View } from "@library/ui";
import Item from "./Item";
import styles from "./styles";

const ToolList = ({ openWindow, selectedIndex, tools, style }) => {
  return (
    <View style={{ ...styles.view, ...style }}>
      <Text style={styles.title}>DEV-OS TOOL BROWSER</Text>
      <View style={styles.list}>
        {tools.map((tool, index) => {
          const isSelected = selectedIndex === index;
          return <Item style={styles.item(isSelected)} key={`ITEM_${index}`} openWindow={openWindow} {...tool} />;
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
