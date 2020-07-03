import React from "react";
import { ViewRef } from "@library/ui";
import { useHover } from "@library/hooks";
import styles from "./styles";

const Item = ({ closeWindow, configs, createWindow, index, label, style }) => {
  const { isHovered, ref } = useHover();

  const handleClick = () => {
    closeWindow();
    createWindow(configs);
  };

  return (
    <ViewRef style={{ ...styles.view, ...style, ...styles.stripe(index), ...styles.hovered(isHovered) }} onClick={handleClick} ref={ref}>
      {label}
    </ViewRef>
  );
};

Item.defaultProps = {
  closeWindow: () => {},
  configs: {},
  createWindow: () => {},
  index: 0,
  label: "",
  style: {},
};

export default Item;
