import SVG, { Circle, Rect } from "react-native-svg";

import React from "react";
import { View, StyleSheet } from "react-native";

export const Svg = () => {
  return (
    <View
      style={[
        {
          height: 100,
          width: 100,
          alignItems: "center",
          justifyContent: "center",
        },
      ]}
    >
      <SVG height="50%" width="50%" viewBox="0 0 100 100">
        <Circle
          cx="50"
          cy="50"
          r="45"
          stroke="blue"
          strokeWidth="2.5"
          fill="green"
        />
        <Rect
          x="15"
          y="15"
          width="70"
          height="70"
          stroke="red"
          strokeWidth="2"
          fill="yellow"
        />
      </SVG>
    </View>
  );
};
