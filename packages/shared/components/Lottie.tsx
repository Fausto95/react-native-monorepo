import React from "react";
import LottieView from "lottie-react-native";

export const Lottie = () => {
  return (
    <LottieView
      source={require("./assets/lottie.json")}
      style={{ width: 200, height: 200 }}
      autoPlay
      loop
    />
  );
};
