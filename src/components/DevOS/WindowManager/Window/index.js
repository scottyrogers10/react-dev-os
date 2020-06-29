import React from "react";
import { View } from "@library/ui";
import store from "@store";
import { useStore } from "@tools/hooks";
import Content from "./Content";
import Header from "./Header";
import styles from "./styles";

const Window = ({ id, style }) => {
  const window = useStore((store) => store.getState("windows").byId[id]);
  const handleMouseDown = () => store.dispatch("windows.focus", id);

  return (
    <View style={{ ...styles.view(window), ...style }} onMouseDown={handleMouseDown}>
      <Header style={styles.header} id={id} />
      <Content id={id} />
    </View>
  );
};

Window.defaultProps = {
  id: null,
  style: {},
};

export default Window;
