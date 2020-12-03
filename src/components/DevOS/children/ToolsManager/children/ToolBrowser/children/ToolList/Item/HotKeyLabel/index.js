import React, { Fragment } from "react";
import { Text, View } from "@library/components";
import { Label } from "./children";
import { getKeyCodeLabels } from "./helpers";
import styles from "./styles";

const HotKeyLabel = ({ hotKeys, style }) => {
  const keyLabels = getKeyCodeLabels(hotKeys);

  return (
    <View style={{ ...styles.view, ...style }}>
      {keyLabels.map((keyLabel, index) => {
        const isFirst = index === 0;

        return (
          <View style={styles.keyLabels} key={`KEY_LABEL_${index}`}>
            {!isFirst && <Text style={styles.plusSymbol}>+</Text>}
            <Label style={styles.label} value={keyLabel} />
          </View>
        );
      })}
    </View>
  );
};

HotKeyLabel.defaultProps = {
  hotKeys: [],
  style: {},
};

export default HotKeyLabel;
