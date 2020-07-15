import React from "react";
import { ViewRef } from "@library/ui";
import { useHover } from "@library/hooks";
import store from "@store";
import styles from "./styles";

const Item = ({ configs, createWindow, windowId, index, label, style }) => {
  const { isHovered, ref } = useHover();

  const handleClick = () => {
    createWindow(configs);
    store.dispatch("windows.remove", windowId);
  };

  return (
    <ViewRef style={{ ...styles.view, ...style, ...styles.stripe(index), ...styles.hovered(isHovered) }} onClick={handleClick} ref={ref}>
      {label}
    </ViewRef>
  );
};

Item.defaultProps = {
  configs: {},
  createWindow: () => {},
  windowId: null,
  index: 0,
  label: "",
  style: {},
};

export default Item;
