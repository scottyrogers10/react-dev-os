import React from "react";
import { View } from "library/ui";
import Window from "./Window";
import { useStore } from "tools/hooks";
import styles from "./styles";

const WindowManager = ({ style }) => {
  const windowIds = useStore((store) => store.getState("windows").orderedIds);
  console.log(windowIds);

  return (
    <View style={{ ...styles.view, ...style }}>
      {windowIds.map((windowId) => {
        return <Window key={`WINDOW_${index}`} id={windowId} />;
      })}
    </View>
  );
};

WindowManager.defaultProps = {
  style: {},
};

export default WindowManager;
