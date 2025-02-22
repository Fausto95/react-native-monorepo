import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { checkMultiple, PERMISSIONS } from "react-native-permissions";

export const Permissions = () => {
  const [hasCameraPermission, setHasCameraPermission] = useState(false);
  useEffect(() => {
    checkMultiple([PERMISSIONS.ANDROID.CAMERA, PERMISSIONS.IOS.CAMERA]).then(
      (statuses) => {
        setHasCameraPermission(
          statuses[PERMISSIONS.ANDROID.CAMERA] === "granted" ||
            statuses[PERMISSIONS.IOS.CAMERA] === "granted"
        );
      }
    );
  }, []);

  return (
    <View>
      <Text>{hasCameraPermission ? "Granted" : "Not granted"}</Text>
    </View>
  );
};
