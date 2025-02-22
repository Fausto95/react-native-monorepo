import React from "react";
import { Text } from "react-native";
import UA from "react-native-user-agent";

export const UserAgent = () => {
  return <Text style={{ fontSize: 18 }}>{UA.getUserAgent()}</Text>;
};
