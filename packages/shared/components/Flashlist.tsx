import React from "react";
import { FlashList as FL } from "@shopify/flash-list";
import { Text } from "react-native";

const DATA = [
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
];

export const Flashlist = () => {
  return (
    <FL
      horizontal
      data={DATA}
      renderItem={({ item }) => <Text>{item.title}</Text>}
      estimatedItemSize={10}
    />
  );
};
