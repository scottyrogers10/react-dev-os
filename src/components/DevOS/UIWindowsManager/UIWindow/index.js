import React, { useRef } from "react";
import { ViewRef } from "@library/components";
import store from "@store";
import { useStore } from "@tools/hooks";
import Content from "./Content";
import Header from "./Header";
import Resizable from "./Resizable";
import styles from "./styles";

const UIWindow = ({ id, style }) => {
  const contentRef = useRef(null);
  const uiWindowRef = useRef(null);
  const state = useStore((store) => store.getState("uiWindows").byId[id]);

  const handleMouseDown = () => !state.isFocused && store.dispatch("uiWindows.focus", id);

  return (
    <ViewRef style={{ ...styles.view(state), ...style }} onMouseDown={handleMouseDown} ref={uiWindowRef}>
      <Resizable id={id} contentRef={contentRef} minSize={state.minSize} uiWindowRef={uiWindowRef}>
        <Header style={styles.header} id={id} contentRef={contentRef} uiWindowRef={uiWindowRef} />
        <Content id={id} contentRef={contentRef} />
      </Resizable>
    </ViewRef>
  );
};

UIWindow.defaultProps = {
  id: null,
  style: {},
};

export default UIWindow;
