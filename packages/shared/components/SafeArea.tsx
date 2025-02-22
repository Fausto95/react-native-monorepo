import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export const SafeArea = ({ children }) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>{children}</SafeAreaView>
    </SafeAreaProvider>
  );
};
