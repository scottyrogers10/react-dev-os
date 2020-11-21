import React from "react";
import { View } from "@library/components";
import { colors } from "@library/styles";
import ActionButton from "./ActionButton";
import styles from "./styles";

const ActionButtons = ({ isFocused, onClose, style }) => {
  return (
    <View style={{ ...styles.view, ...style }}>
      <ActionButton
        style={styles.marginRight}
        primaryColor={isFocused ? colors.red[500] : colors.gray[550]}
        onClick={onClose}
      />
      <ActionButton style={styles.marginRight} primaryColor={isFocused ? colors.yellow[700] : colors.gray[550]} />
      <ActionButton primaryColor={isFocused ? colors.green[500] : colors.gray[550]} />
    </View>
  );
};

ActionButtons.defaultProps = {
  isFocused: false,
  onClose: () => {},
  style: {},
};

export default ActionButtons;
