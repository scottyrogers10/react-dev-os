import React, { useRef } from "react";
import { View, ViewRef } from "library/ui";
import Header from "./Header";
import store from "store";
import styles from "./styles";

const Container = View;
const Window = ({ id, style }) => {
  const elem = useRef();
  const handleMouseDown = () => {};
  const Content = store.getState("windows").byId[id].component;

  return (
    <ViewRef style={{ ...styles.view(data), ...style }} ref={elem} onMouseDown={handleMouseDown}>
      <Header style={styles.header} id={id} />
      <Container style={styles.contentContainer}>
        <Content />
      </Container>
    </ViewRef>
  );
};

Window.defaultProps = {
  id: null,
  style: {},
};

export default Window;
