import React from "react";
import { Text, View, ViewRef } from "@library/ui";
import { useOnMove } from "@library/hooks";
import { useStore } from "@tools/hooks";
import store from "@store";
import closeWindow from "@procedures/windows/close";
import { ActionButtons } from "./children";
import { onMoveHandlers } from "./helpers";
import styles from "./styles";

const Header = ({ contentRef, id, style, windowRef }) => {
  const { ref: headerRef } = useOnMove(onMoveHandlers({ contentRef, id, windowRef }));
  const { isFocused, isOpaque, title } = useStore((store) => store.getState("windows").byId[id]);

  const handleClose = () => closeWindow(id);
  const handleDoubleClick = () => store.dispatch("windows.update", { id, isOpaque: !isOpaque });

  return (
    <ViewRef style={{ ...styles.view, ...style, ...styles.focused(isFocused) }} onDoubleClick={handleDoubleClick} ref={headerRef}>
      <ActionButtons style={styles.actionButtons} isFocused={isFocused} onClose={handleClose} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.flexSpacer} />
    </ViewRef>
  );
};

Header.defaultProps = {
  contentRef: null,
  id: null,
  style: {},
  windowRef: null,
};

export default Header;
