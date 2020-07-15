import React from "react";
import { View } from "@library/ui";
import Item from "./Item";
import styles from "./styles";

const ToolBrowser = ({ createWindow, __id, style, tools }) => {
  return (
    <View style={{ ...styles.view, ...style }}>
      {tools.map((tool, index) => {
        const extendedProps = typeof tool === "function" ? tool() : tool;
        return <Item key={`ITEM_${index}`} createWindow={createWindow} windowId={__id} index={index} {...extendedProps} />;
      })}
    </View>
  );
};

ToolBrowser.defaultProps = {
  createWindow: () => {},
  __id: null,
  style: {},
  tools: [],
};

export default ToolBrowser;
