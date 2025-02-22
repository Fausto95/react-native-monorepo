import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { RNFFprobe } from "react-native-ffmpeg";

export const FFMPEG = () => {
  const [metadata, setMetadata] = useState<any>(null);

  useEffect(() => {
    const videoPath = require("./assets/video.mp4");
    extractMetadata(videoPath);
  }, []);

  const extractMetadata = async (videoPath) => {
    try {
      const information = await RNFFprobe.getMediaInformation(
        "./assets/video.mp4"
      );
      const props = information.getAllProperties();

      console.log({ props });
      if (props) {
        const metadataObj = {
          duration: props.duration,
          bitrate: props.bitrate,
          format: props.format,
          startTime: props.startTime,
          size: props.size,
        };

        setMetadata(metadataObj);
      }
    } catch (error) {
      console.error("Error extracting metadata:", error);
    }
  };

  return (
    <View style={styles.container}>
      {metadata && (
        <View style={styles.metadataContainer}>
          <Text style={styles.title}>Video Metadata</Text>
          <Text>Format: {metadata.format}</Text>
          <Text>Duration: {metadata.duration}s</Text>
          <Text>Bitrate: {metadata.bitrate} kb/s</Text>
          <Text>
            Size: {Math.round((metadata.size / 1024 / 1024) * 100) / 100} MB
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  metadataContainer: {
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  streamContainer: {
    marginTop: 15,
    padding: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 5,
  },
  streamTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
});
