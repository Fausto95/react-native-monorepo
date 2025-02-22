import * as KC from "react-native-keychain";
import { Text } from "react-native";
import React, { useEffect, useState } from "react";

const bootStrap = async () => {
  const username = "zuck";
  const password = "poniesRgr8";

  // Store the credentials
  await KC.setGenericPassword(username, password);

  try {
    // Retrieve the credentials
    const credentials = await KC.getGenericPassword();
    return credentials;
  } catch (error) {
    console.error("Failed to access Keychain", error);
  }
};

export const Keychain = () => {
  const [credentials, setCredentials] = useState<KC.UserCredentials | null>(
    null
  );

  useEffect(() => {
    bootStrap().then((credentials) =>
      setCredentials(credentials as KC.UserCredentials)
    );
  }, []);

  return <Text>Keychain: {JSON.stringify(credentials)}</Text>;
};
