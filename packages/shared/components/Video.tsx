import { useRef } from "react";
import { StyleSheet } from "react-native";
import Video, { VideoRef } from "react-native-video";

export const VideoPlayer = () => {
  const videoRef = useRef<VideoRef>(null);
  const video = require("./assets/video.mp4");

  return (
    <Video
      source={video}
      ref={videoRef}
      style={styles.backgroundVideo}
      controls
      paused={true}
    />
  );
};

var styles = StyleSheet.create({
  backgroundVideo: {
    height: 300,
    width: 300,
  },
});
