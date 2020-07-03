import React from "react";
import { Resizable, ViewRef } from "@library/ui";
import { useContextMenu } from "@library/hooks";
import resizeWindow from "@procedures/windows/resize";
import store from "@store";
import { useStore } from "@tools/hooks";
import Content from "./Content";
import ContextMenu from "./ContextMenu";
import Header from "./Header";
import styles from "./styles";

const Window = ({ id, style }) => {
  const state = useStore((store) => store.getState("windows").byId[id]);
  const { isOpen: isMenuOpen, position: menuPosition, ref } = useContextMenu({ isActive: state.contextMenu.items.length > 0 });

  const isFocused = useStore((store) => {
    const [focusedId] = store.getState("windows").orderedIds.slice(-1);
    return id === focusedId;
  });

  const handleMouseDown = () => !isFocused && store.dispatch("windows.focus", id);
  const handleResize = (dimensions) => resizeWindow(dimensions, id);

  return (
    <ViewRef style={{ ...styles.view(state), ...style }} onMouseDown={handleMouseDown} ref={ref}>
      <Resizable style={styles.resizable} onResize={handleResize} isActive={isFocused}>
        <Header style={styles.header} id={id} isFocused={isFocused} />
        <Content id={id} />
        <ContextMenu
          isOpen={isMenuOpen}
          position={{ x: menuPosition.x - state.position.x, y: menuPosition.y - state.position.y }}
          {...state.contextMenu}
        />
      </Resizable>
    </ViewRef>
  );
};

Window.defaultProps = {
  id: null,
  style: {},
};

export default Window;
