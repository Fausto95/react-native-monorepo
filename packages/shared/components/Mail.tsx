import React from "react";
import { View, Alert, Button, StyleSheet } from "react-native";
import Mailer from "react-native-mail";

export const Mail = () => {
  const handleEmail = () => {
    Mailer.mail(
      {
        subject: "need help",
        recipients: ["support@example.com"],
        ccRecipients: ["supportCC@example.com"],
        bccRecipients: ["supportBCC@example.com"],
        body: "<b>A Bold Body</b>",
      },
      (error, event) => {
        Alert.alert(
          error,
          event,
          [
            {
              text: "Ok",
              onPress: () => console.log("OK: Email Error Response"),
            },
            {
              text: "Cancel",
              onPress: () => console.log("CANCEL: Email Error Response"),
            },
          ],
          { cancelable: true }
        );
      }
    );
  };

  return (
    <View style={styles.container}>
      <Button onPress={handleEmail} title="Email Me" color="#841584" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
