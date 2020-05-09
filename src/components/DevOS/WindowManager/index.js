import React, { useState } from "react";
import { View } from "library/ui";
import store from "store";
// import { useStore } from "library/hooks";
// import { useStore } from "tools/hooks";
import styles from "./styles";

const WindowManager = ({ style }) => {
  window.React1 = React;
  const [windowIds, setWindowIds] = useState([]);
  // const windowIds = useStore(store)((store) => {
  //   return store.getState("windows").orderedIds;
  // });
  // const windowIds = useStore((store) => store.getState("windows").orderedIds);
  console.log(windowIds);

  return (
    <View style={{ ...styles.view, ...style }}>
      {/* {windowIds.map((windowId) => {
        return <Window key={`WINDOW_${index}`} id={windowId} />;
      })} */}
    </View>
  );
};

WindowManager.defaultProps = {
  style: {},
};

export default WindowManager;
