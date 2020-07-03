import React from "react";
import { View } from "@library/ui";
import store from "@store";
import { useStore } from "@tools/hooks";
import Content from "./Content";
import Header from "./Header";
import styles from "./styles";

const Window = ({ id, style }) => {
  const state = useStore((store) => store.getState("windows").byId[id]);
  const isFocused = useStore((store) => {
    const [focusedId] = store.getState("windows").orderedIds.slice(-1);
    return id === focusedId;
  });

  const handleMouseDown = () => !isFocused && store.dispatch("windows.focus", id);

  return (
    <View style={{ ...styles.view(state), ...style }} onMouseDown={handleMouseDown}>
      <Header style={styles.header} id={id} isFocused={isFocused} />
      <Content id={id} />
    </View>
  );
};

Window.defaultProps = {
  id: null,
  style: {},
};

export default Window;
