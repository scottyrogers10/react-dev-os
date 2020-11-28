import React from "react";
import { View } from "@library/components";
import { colors } from "@library/styles";
import { osWindows } from "@procedures";
import ActionButton from "./ActionButton";
import styles from "./styles";

const ActionButtons = ({ id, isFocused, style }) => {
  const handleClose = () => osWindows.close(id);
  const handleExpand = () => osWindows.expand(id);

  return (
    <View style={{ ...styles.view, ...style }}>
      <ActionButton
        style={styles.marginRight}
        primaryColor={isFocused ? colors.red[500] : colors.gray[550]}
        onClick={handleClose}
      />
      <ActionButton style={styles.marginRight} primaryColor={isFocused ? colors.yellow[700] : colors.gray[550]} />
      <ActionButton primaryColor={isFocused ? colors.green[500] : colors.gray[550]} onClick={handleExpand} />
    </View>
  );
};

ActionButtons.defaultProps = {
  id: null,
  isFocused: false,
  style: {},
};

export default ActionButtons;
