import React from "react";
import { Text } from "react-native";
import JM from "jail-monkey";

export const JailMonkey = () => {
  return <Text>JailMonkey: {JM.isJailBroken() ? "true" : "false"}</Text>;
};
