import React from "react";
import { Text, View } from "@library/ui";
import Metadata from "./Metadata";
import styles from "./styles";

const Secondary = ({ author, createdDate, description, style }) => {
  return (
    <View style={{ ...styles.view, ...style }}>
      <Text style={styles.description}>{description}</Text>
      <Metadata type={"Kind"} value={"Tool"} />
      <Metadata type={"Author"} value={author} />
      <Metadata type={"Created"} value={createdDate} />
    </View>
  );
};

Secondary.defaultProps = {
  author: "",
  createdDate: "",
  description: "",
  style: {},
};

export default Secondary;
