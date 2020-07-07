import React, { useState } from "react";
import { Resizable, ViewRef } from "@library/ui";
import { useContextMenu } from "@library/hooks";
import moveWindow from "@procedures/windows/move";
import resizeWindow from "@procedures/windows/resize";
import store from "@store";
import { useStore } from "@tools/hooks";
import Content from "./Content";
import ContextMenu from "./ContextMenu";
import Header from "./Header";
import styles from "./styles";

const Window = ({ id, style }) => {
  const state = useStore((store) => store.getState("windows").byId[id]);
  const { event: contextMenuEvent, isOpen: isMenuOpen, position: menuPosition, ref } = useContextMenu({
    isActive: state.contextMenu.items.length > 0,
  });

  const isFocused = useStore((store) => {
    const [focusedId] = store.getState("windows").orderedIds.slice(-1);
    return id === focusedId;
  });

  const handleMouseDown = () => !isFocused && store.dispatch("windows.focus", id);

  const handleMove = (event) => moveWindow({ elem: ref.current, event, id });
  const handleMoveEnd = (event) => {
    moveWindow({ elem: ref.current, event, id, shouldDispatch: true });
  };

  const handleResize = (dimensions) => resizeWindow({ dimensions, elem: ref.current, id });
  const handleResizeEnd = () => {
    const { top, left, width, height } = ref.current.getBoundingClientRect();
    resizeWindow({ dimensions: { width, height, top, left }, elem: ref.current, id, shouldDispatch: true });
  };

  return (
    <ViewRef style={{ ...styles.view(state), ...style }} onMouseDown={handleMouseDown} ref={ref}>
      <Resizable style={styles.resizable} minHeight={25} minWidth={95} onResize={handleResize} onResizeEnd={handleResizeEnd}>
        <Header style={styles.header} id={id} isFocused={isFocused} onMove={handleMove} onMoveEnd={handleMoveEnd} />
        <Content id={id} />
        <ContextMenu
          event={contextMenuEvent}
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
