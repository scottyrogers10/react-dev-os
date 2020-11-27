import React from "react";
import { Text, View } from "@library/components";
import Metadata from "./Metadata";
import styles from "./styles";

const Details = ({ author, createdDate, description, style }) => {
  return (
    <View style={{ ...styles.view, ...style }}>
      <Text style={styles.description}>{description}</Text>
      <Metadata type={"Kind"} value={"Tool"} />
      <Metadata type={"Author"} value={author} />
      <Metadata type={"Created"} value={createdDate} />
    </View>
  );
};

Details.defaultProps = {
  author: "",
  createdDate: "",
  description: "",
  style: {},
};

export default Details;
