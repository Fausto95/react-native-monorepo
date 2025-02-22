import React, { useEffect, useState } from "react";
import { View, Button } from "react-native";
import TP, { usePlaybackState, State } from "react-native-track-player";

const track = {
  url: "https://rntp.dev/example/Longing.mp3",
  title: "Longing",
  artist: "David Chavez",
  artwork: "https://rntp.dev/example/Longing.jpeg",
  duration: 143,
};

async function setup() {
  await TP.setupPlayer();
  await TP.add(track);
}

export const TrackPlayer = () => {
  const playbackState = usePlaybackState();
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  useEffect(() => {
    setup().then(() => setIsPlayerReady(true));
  }, []);

  if (!isPlayerReady) {
    return null;
  }

  const togglePlayback = async () => {
    const currentTrack = await TP.getActiveTrack();
    if (currentTrack !== null) {
      if (playbackState.state === State.Playing) {
        await TP.pause();
      } else {
        await TP.play();
      }
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        title={playbackState.state === State.Playing ? "Pause" : "Play"}
        onPress={togglePlayback}
      />
    </View>
  );
};
