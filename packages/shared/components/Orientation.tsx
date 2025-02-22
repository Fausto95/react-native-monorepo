import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import OR from "react-native-orientation-locker";

export const Orientation = () => {
  const [orientation, setOrientation] = useState("");

  useEffect(() => {
    OR.getOrientation((currentOrientation) => {
      setOrientation(currentOrientation);
    });

    const orientationChangeListener = OR.addOrientationListener(
      (newOrientation) => {
        setOrientation(newOrientation);
      }
    );

    return () => {
      OR.removeOrientationListener(orientationChangeListener);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Current Orientation: {orientation}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
});
