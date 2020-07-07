import React from "react";
import { View } from "@library/ui";
import Item from "./Item";
import styles from "./styles";

const ContextMenu = ({ event, isOpen, items, position, style, width }) => {
  const handleMouseDown = (event) => event.stopPropagation();

  return (
    isOpen && (
      <View style={{ ...styles.view({ position, width }), ...style }} onMouseDown={handleMouseDown}>
        {items.map((item, index) => {
          return <Item key={`CONTEXT_ITEM_${index}`} contextMenuEvent={event} {...item} />;
        })}
      </View>
    )
  );
};

ContextMenu.defaultProps = {
  event: null,
  isOpen: false,
  items: [],
  position: { x: 0, y: 0 },
  style: {},
  width: 0,
};

export default ContextMenu;
