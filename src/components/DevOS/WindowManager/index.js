import React from "react";
import { View } from "@library/ui";
import { useStore } from "@tools/hooks";
import createWindow from "@procedures/windows/create";
import Window from "./Window";
import styles from "./styles";

window.createWindow = createWindow;

const WindowManager = ({ style }) => {
  const windowIds = useStore((store) => store.getState("windows").orderedIds);

  return (
    <View style={{ ...styles.view, ...style }}>
      {windowIds.map((windowId) => {
        return <Window key={`WINDOW_${windowId}`} id={windowId} />;
      })}
    </View>
  );
};

WindowManager.defaultProps = {
  style: {},
};

export default WindowManager;
