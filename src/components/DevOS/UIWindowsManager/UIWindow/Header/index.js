import React from "react";
import { Text, View } from "@library/components";
import { useOnMove } from "@library/hooks";
import { useStore } from "@tools/hooks";
import store from "@store";
import { uiWindows } from "@procedures";
import { ActionButtons } from "./children";
import { onMoveHandlers } from "./helpers";
import styles from "./styles";

const Header = ({ contentRef, id, style, uiWindowRef }) => {
  const { events } = useOnMove(onMoveHandlers({ contentRef, id, uiWindowRef }));
  const { isFocused, isOpaque, title } = useStore((store) => store.getState("uiWindows").byId[id]);
  const handleClose = () => uiWindows.close(id);
  const handleDoubleClick = () => store.dispatch("uiWindows.update", { id, isOpaque: !isOpaque });

  return (
    <View style={{ ...styles.view, ...style, ...styles.focused(isFocused) }} onDoubleClick={handleDoubleClick} {...events}>
      <ActionButtons style={styles.actionButtons} isFocused={isFocused} onClose={handleClose} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.flexSpacer} />
    </View>
  );
};

Header.defaultProps = {
  contentRef: null,
  id: null,
  style: {},
  uiWindowRef: null,
};

export default Header;
