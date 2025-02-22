import React, { useState } from "react";
import { Text, View, Button } from "react-native";
import CB from "@react-native-clipboard/clipboard";

export const Clipboard = () => {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    CB.setString("Hello");
    setCopied(true);
  };

  return (
    <View>
      <Button title="Copy" onPress={copy} />
      <Text>{copied ? "Copied" : "Not copied"}</Text>
    </View>
  );
};
