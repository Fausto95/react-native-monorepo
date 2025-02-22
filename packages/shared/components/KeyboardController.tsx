import { TextInput, View } from "react-native";
import React, { useState } from "react";
export { KeyboardProvider } from "react-native-keyboard-controller";

export const KeyboardController = () => {
  const [text, setText] = useState("");

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TextInput
        style={{ width: 300, height: 40, borderColor: "black", borderWidth: 1 }}
        placeholder="Type something..."
        value={text}
        onChangeText={setText}
      />
    </View>
  );
};
