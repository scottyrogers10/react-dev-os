import React from "react";
import { View } from "@library/ui";
import { useStore } from "@tools/hooks";
import Window from "./Window";
import styles from "./styles";

const WindowManager = ({ style }) => {
  const windowIds = useStore((store) => store.getState("windows").ids);

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
