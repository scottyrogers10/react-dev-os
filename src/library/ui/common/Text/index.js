import React from "react";
import styles from "./styles";

const Text = props => {
  return (
    <div style={{ ...styles.container, ...props.style }} title={props.title}>
      {props.children}
    </div>
  );
};

Text.defaultProps = {
  children: null,
  title: null
};

export default Text;
