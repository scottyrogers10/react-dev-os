import React from "react";
import { View } from "@library/ui";
import Item from "./Item";
import styles from "./styles";

const ToolBrowser = ({ closeWindow, createWindow, style, tools }) => {
  return (
    <View style={{ ...styles.view, ...style }}>
      {tools.map((tool, index) => {
        return <Item key={`ITEM_${index}`} closeWindow={closeWindow} createWindow={createWindow} index={index} {...tool} />;
      })}
    </View>
  );
};

ToolBrowser.defaultProps = {
  closeWindow: () => {},
  createWindow: () => {},
  style: {},
  tools: [],
};

export default ToolBrowser;
