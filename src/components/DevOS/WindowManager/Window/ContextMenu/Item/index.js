import React from "react";
import { ViewRef } from "@library/ui";
import { useHover } from "@library/hooks";
import styles from "./styles";

const Item = ({ contextMenuEvent, label, onClick, style }) => {
  const { isHovered, ref } = useHover();

  const handleClick = (event) => {
    onClick(event, contextMenuEvent);
  };

  return (
    <ViewRef style={{ ...styles.view, ...style, ...styles.hovered(isHovered) }} onClick={handleClick} ref={ref}>
      {label}
    </ViewRef>
  );
};

Item.defaultProps = {
  contextMenuEvent: null,
  label: "",
  onClick: () => {},
  style: {},
};

export default Item;
