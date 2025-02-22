import React from "react";
import { View } from "react-native";
import { VictoryAxis, VictoryBar, VictoryChart } from "victory-native";

const DATA = Array.from({ length: 31 }, (_, i) => ({
  day: i,
  highTmp: 40 + 30 * Math.random(),
}));

export const VictoryNative = () => {
  return (
    <View style={{ height: 300 }}>
      <VictoryChart>
        <VictoryAxis />
        <VictoryBar data={DATA} x="day" y="highTmp" />
      </VictoryChart>
    </View>
  );
};
