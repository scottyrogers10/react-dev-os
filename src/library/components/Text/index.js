import React from "react";

const Text = ({ children, style, title }) => {
  return (
    <div style={style} title={title}>
      {children}
    </div>
  );
};

Text.defaultProps = {
  children: null,
  style: {},
  title: null,
};

export default Text;
