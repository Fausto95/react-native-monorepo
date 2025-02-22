import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Server from "@dr.pogodin/react-native-static-server";

export const StaticServer = () => {
  const [serverUrl, setServerUrl] = useState(null);

  useEffect(() => {
    // Create an instance of StaticServer
    const server = new Server(8080, "/www", {
      localOnly: true,
    });

    // Start the server
    server
      .start()
      .then((url) => {
        console.log(`Static server started at ${url}`);
        setServerUrl(url);
      })
      .catch((error) => {
        console.error("Failed to start the static server:", error);
      });

    // Cleanup when the component unmounts
    return () => {
      server.stop();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {serverUrl ? `Server running at: ${serverUrl}` : "Starting server..."}
      </Text>
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
    fontSize: 16,
  },
});
