import React from "react";
import LG from "react-native-linear-gradient";

export const LinearGradient = () => {
  return (
    <LG
      colors={["#000000", "#FFFFFF"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{
        width: 300,
        height: 300,
        overflow: "hidden",
      }}
    />
  );
};
