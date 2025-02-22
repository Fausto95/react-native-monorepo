import React from "react";
import { View, Text } from "react-native";
import SV from "react-native-scratch";

export const Scratch = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Scratch</Text>
      <SV
        brushSize={20}
        threshold={70}
        fadeOut={false}
        placeholderColor="#AAAAAA"
        resizeMode="contain"
      />
    </View>
  );
};
