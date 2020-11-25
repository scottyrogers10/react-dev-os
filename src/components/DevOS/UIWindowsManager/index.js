import React from "react";
import { hotKeys } from "@configs";
import { View } from "@library/components";
import { useKeyboardShortcut } from "@library/hooks";
import { useStore } from "@tools/hooks";
import { uiWindows } from "@procedures";
import UIWindow from "./UIWindow";
import styles from "./styles";

const UIWindowsManager = ({ style }) => {
  const uiWindowIds = useStore((store) => store.getState("uiWindows").ids);

  const handleCloseFocusedWindow = () => uiWindows.closeFocused();
  const handleFocusNextWindow = () => uiWindows.focusNext();
  const handleFocusPrevWindow = () => uiWindows.focusPrev();

  useKeyboardShortcut(hotKeys.closeFocusedWindow, handleCloseFocusedWindow);
  useKeyboardShortcut(hotKeys.focusNextWindow, handleFocusNextWindow);
  useKeyboardShortcut(hotKeys.focusPrevWindow, handleFocusPrevWindow);

  return (
    <View style={{ ...styles.view, ...style }}>
      {uiWindowIds.map((uiWindowId) => {
        return <UIWindow key={`UI_WINDOW_${uiWindowId}`} id={uiWindowId} />;
      })}
    </View>
  );
};

UIWindowsManager.defaultProps = {
  style: {},
};

export default UIWindowsManager;
