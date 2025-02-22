import React from "react";
import { Button, View, StyleSheet } from "react-native";
import { RNCamera } from "react-native-camera";

const styles = StyleSheet.create({
  camera: {
    width: 300,
    height: 300,
    overflow: "hidden",
  },
  video: {
    width: 300,
    height: 300,
    overflow: "hidden",
  },
});

export const Camera = () => {
  return (
    <View>
      <RNCamera
        type="front"
        style={styles.camera}
        // @ts-ignore
        videoStyle={styles.video}
        onTakePicture={() => {}}
        pictureOptions={{
          quality: 0.5,
          base64: true,
        }}
      />
      <Button title="Take Picture" onPress={() => {}} />
    </View>
  );
};
