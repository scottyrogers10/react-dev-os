import React, { useRef } from "react";
import { ViewRef } from "@library/ui";
import store from "@store";
import { useStore } from "@tools/hooks";
import Content from "./Content";
import Header from "./Header";
import Resizable from "./Resizable";
import styles from "./styles";

const Window = ({ id, style }) => {
  const contentRef = useRef(null);
  const windowRef = useRef(null);
  const state = useStore((store) => store.getState("windows").byId[id]);

  const handleMouseDown = () => !state.isFocused && store.dispatch("windows.focus", id);

  return (
    <ViewRef style={{ ...styles.view(state), ...style }} onMouseDown={handleMouseDown} ref={windowRef}>
      <Resizable id={id} contentRef={contentRef} windowRef={windowRef}>
        <Header style={styles.header} id={id} contentRef={contentRef} windowRef={windowRef} />
        <Content id={id} contentRef={contentRef} />
      </Resizable>
    </ViewRef>
  );
};

Window.defaultProps = {
  id: null,
  style: {},
};

export default Window;
