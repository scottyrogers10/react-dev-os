import React from "react";
import { View } from "@library/ui";
import store from "@store";
import { useStore } from "@tools/hooks";
import Header from "./Header";
import styles from "./styles";

const Window = ({ id, style }) => {
  const data = useStore((store) => store.getState("windows").byId[id]);
  const Content = store.getState("windows").byId[id].component;

  const handleMouseDown = () => store.dispatch("windows.focus", id);

  return (
    <View style={{ ...styles.view(data), ...style }} onMouseDown={handleMouseDown}>
      <Header style={styles.header} id={id} />
      <View style={styles.contentContainer}>
        <Content />
      </View>
    </View>
  );
};

Window.defaultProps = {
  id: null,
  style: {},
};

export default Window;
