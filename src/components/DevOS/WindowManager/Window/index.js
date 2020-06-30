import React, { useEffect } from "react";
import { View } from "@library/ui";
import { useMergeState } from "@library/hooks";
import moveWindow from "@procedures/windows/move";
import store from "@store";
import { useStore } from "@tools/hooks";
import Content from "./Content";
import Header from "./Header";
import styles from "./styles";

const Window = ({ id, style }) => {
  const [dimensions, updateDimensions] = useMergeState({ position: { x: 0, y: 0 }, size: { width: 0, height: 0 } });
  const { isOpaque } = useStore((store) => store.getState("windows").byId[id]);
  const isFocused = useStore((store) => {
    const [focusedId] = store.getState("windows").orderedIds.slice(-1);
    return id === focusedId;
  });

  const handleMove = (event) => moveWindow({ event, id, update: updateDimensions });
  const handleMouseDown = () => !isFocused && store.dispatch("windows.focus", id);

  useEffect(() => {
    const { position, size } = store.getState("windows").byId[id];
    updateDimensions({ position, size });
  }, []);

  return (
    <View style={{ ...styles.view({ isOpaque, ...dimensions }), ...style }} onMouseDown={handleMouseDown}>
      <Header style={styles.header} id={id} isFocused={isFocused} onMove={handleMove} />
      <Content id={id} />
    </View>
  );
};

Window.defaultProps = {
  id: null,
  style: {},
};

export default Window;
