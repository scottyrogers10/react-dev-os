import React from "react";
import { View, ViewRef } from "library/ui";
import ActionButtons from "./ActionButtons";
import { useOnMove } from "library/hooks";
import { useStore } from "tools/hooks";
import styles from "./styles";

const FlexSpacer = View;
const Text = View;
const Header = ({ id, style }) => {
  const { isFocused, title } = useStore((store) => {
    const windows = store.getState("windows");
    const [focusedId] = windows.orderedIds.slice(-1);
    const title = windows.byId[id].title;

    return { isFocused: id === focusedId, title };
  });

  const handleClose = () => {};
  const handleOnMove = () => {};

  const { ref } = useOnMove({ onMove: handleOnMove });
  return (
    <ViewRef style={{ ...styles.view, ...style, ...styles.focused(isFocused) }} ref={ref}>
      <ActionButtons style={styles.actionButtons} isFocused={isFocused} onClose={handleClose} />
      <Text style={styles.title}>{title}</Text>
      <FlexSpacer style={styles.flexSpacer} />
    </ViewRef>
  );
};

Header.defaultProps = {
  id: null,
  style: {},
};

export default Header;
