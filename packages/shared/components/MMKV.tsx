import React from "react";
import { MMKVLoader, useMMKVStorage } from "react-native-mmkv-storage";
import { StyleSheet, Text, View } from "react-native";

const storage = new MMKVLoader().initialize();

export const MMKV = () => {
  const [user] = useMMKVStorage("user", storage, "Test");
  const [year] = useMMKVStorage("year", storage, 2024);

  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>
        {user} - {year}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "lightblue",
    padding: 20,
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
  },
});
