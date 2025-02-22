import React from "react";
import { Button, View } from "react-native";
import RNSound from "react-native-sound";

export const Sound = () => {
  const sound = new RNSound(
    "https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/frog.wav",
    RNSound.MAIN_BUNDLE,
    (error) => {
      if (error) {
        console.log("failed to load the sound", error);
        return;
      }
    }
  );
  const play = () => {
    sound.play();
  };
  const pause = () => {
    sound.pause();
  };
  const stop = () => {
    sound.stop();
  };

  return (
    <View>
      <Button title="Play" onPress={play} />
      <Button title="Pause" onPress={pause} />
      <Button title="Stop" onPress={stop} />
    </View>
  );
};
