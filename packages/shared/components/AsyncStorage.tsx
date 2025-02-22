import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import RNAsyncStorage from "@react-native-async-storage/async-storage";

export const AsyncStorage = () => {
  const [data, setData] = useState("");

  const storeData = async (value: string) => {
    try {
      await RNAsyncStorage.setItem("@test", value);
    } catch (e) {
      console.log(e);
    }
  };

  const getData = async () => {
    try {
      const value = await RNAsyncStorage.getItem("@test");
      if (value !== null) {
        setData(value);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View>
      <Button title="Store Data" onPress={() => storeData("Hello, World!")} />
      <Button title="Get Data" onPress={getData} />
      <Text>{data}</Text>
    </View>
  );
};
