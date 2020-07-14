import React from "react";
import { ViewRef } from "@library/ui";
import { useHover } from "@library/hooks";
import styles from "./styles";

const Item = ({ configs, createWindow, index, label, style }) => {
  const { isHovered, ref } = useHover();

  const handleClick = () => createWindow(configs);

  return (
    <ViewRef style={{ ...styles.view, ...style, ...styles.stripe(index), ...styles.hovered(isHovered) }} onClick={handleClick} ref={ref}>
      {label}
    </ViewRef>
  );
};

Item.defaultProps = {
  configs: {},
  createWindow: () => {},
  index: 0,
  label: "",
  style: {},
};

export default Item;
