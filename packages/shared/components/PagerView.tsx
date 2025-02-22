import React from "react";
import { View, Text } from "react-native";
import PV from "react-native-pager-view";

export const PagerView = () => {
  return (
    <PV style={{ height: 200, width: 200 }} initialPage={0}>
      <View key="1" style={{ flex: 1, backgroundColor: "red" }}>
        <Text>Page 1</Text>
      </View>
      <View key="2" style={{ flex: 1, backgroundColor: "blue" }}>
        <Text>Page 2</Text>
      </View>
    </PV>
  );
};
