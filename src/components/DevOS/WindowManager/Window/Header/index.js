import React from "react";
import { Text, View, ViewRef } from "@library/ui";
import { useOnMove } from "@library/hooks";
import { useStore } from "@tools/hooks";
import store from "@store";
import closeWindow from "@procedures/windows/close";
import ActionButtons from "./ActionButtons";
import styles from "./styles";

const Header = ({ id, isFocused, onMove, onMoveEnd, onMoveStart, style }) => {
  const { ref } = useOnMove({ onMove, onMoveEnd, onMoveStart });
  const { isOpaque, title } = useStore((store) => store.getState("windows").byId[id]);

  const handleClose = () => isOpaque && closeWindow(id);
  const handleDoubleClick = () => store.dispatch("windows.update", { id, isOpaque: !isOpaque });

  return (
    <ViewRef style={{ ...styles.view, ...style, ...styles.focused(isFocused) }} onDoubleClick={handleDoubleClick} ref={ref}>
      <ActionButtons style={styles.actionButtons} isFocused={isFocused} onClose={handleClose} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.flexSpacer} />
    </ViewRef>
  );
};

Header.defaultProps = {
  id: null,
  isFocused: false,
  onMove: () => {},
  onMoveEnd: () => {},
  onMoveStart: () => {},
  style: {},
};

export default Header;
