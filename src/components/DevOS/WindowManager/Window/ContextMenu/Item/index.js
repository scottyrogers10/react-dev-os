import React from "react";
import { ViewRef } from "@library/ui";
import { useHover } from "@library/hooks";
import styles from "./styles";

const Item = ({ label, onClick, style }) => {
  const { isHovered, ref } = useHover();

  return (
    <ViewRef style={{ ...styles.view, ...style, ...styles.hovered(isHovered) }} onClick={onClick} ref={ref}>
      {label}
    </ViewRef>
  );
};

Item.defaultProps = {
  label: "",
  onClick: () => {},
  style: {},
};

export default Item;
