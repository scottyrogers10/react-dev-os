import React from "react";
import { View } from "@library/ui";
import Item from "./Item";
import styles from "./styles";

const ToolBrowser = ({ style, tools }) => {
  return (
    <View style={{ ...styles.view, ...style }}>
      {tools.map((tool, index) => {
        return <Item key={`ITEM_${index}`} index={index} {...tool} />;
      })}
    </View>
  );
};

ToolBrowser.defaultProps = {
  style: {},
  tools: [],
};

export default ToolBrowser;
