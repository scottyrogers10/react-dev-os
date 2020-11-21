import React from "react";
import { View } from "@library/components";
import { useStore } from "@tools/hooks";
import UIWindow from "./UIWindow";
import styles from "./styles";

const UIWindowsManager = ({ style }) => {
  const uiWindowIds = useStore((store) => store.getState("uiWindows").ids);

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
