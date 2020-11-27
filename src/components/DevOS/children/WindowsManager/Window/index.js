import React, { useRef } from "react";
import { ViewRef } from "@library/components";
import store from "@store";
import { useStore } from "@tools/hooks";
import Content from "./Content";
import Header from "./Header";
import Resizable from "./Resizable";
import styles from "./styles";

const Window = ({ id, style }) => {
  const contentRef = useRef(null);
  const osWindowRef = useRef(null);
  const state = useStore((store) => store.getState("osWindows").byId[id]);

  const handleMouseDown = () => !state.isFocused && store.dispatch("osWindows.focus", id);

  return (
    <ViewRef style={{ ...styles.view(state), ...style }} onMouseDown={handleMouseDown} ref={osWindowRef}>
      <Resizable id={id} contentRef={contentRef} minSize={state.minSize} osWindowRef={osWindowRef}>
        <Header style={styles.header} id={id} contentRef={contentRef} osWindowRef={osWindowRef} />
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
