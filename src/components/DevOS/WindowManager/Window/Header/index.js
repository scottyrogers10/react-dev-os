import React from "react";
import { Text, View, ViewRef } from "@library/ui";
import { useOnMove } from "@library/hooks";
import { useStore } from "@tools/hooks";
import closeWindow from "@procedures/windows/close";
import store from "@store";
import ActionButtons from "./children/ActionButtons";
import handleMove from "./helpers/handleMove";
import styles from "./styles";

const Header = ({ id, style }) => {
  const { ref } = useOnMove({ onMove: (event) => handleMove(store, event, id) });

  const title = useStore((store) => store.getState("windows").byId[id].title);
  const isFocused = useStore((store) => {
    const [focusedId] = store.getState("windows").orderedIds.slice(-1);
    return id === focusedId;
  });

  const handleClose = () => closeWindow(id);

  return (
    <ViewRef style={{ ...styles.view, ...style, ...styles.focused(isFocused) }} ref={ref}>
      <ActionButtons style={styles.actionButtons} isFocused={isFocused} onClose={handleClose} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.flexSpacer} />
    </ViewRef>
  );
};

Header.defaultProps = {
  id: null,
  style: {},
};

export default Header;
