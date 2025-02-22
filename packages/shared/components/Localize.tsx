import React from "react";
import { Text } from "react-native";
import * as RNLocalize from "react-native-localize";

export const Localize = () => {
  return <Text>{RNLocalize.getLocales()[0].languageTag}</Text>;
};
