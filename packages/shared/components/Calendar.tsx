import React, { useEffect, useState } from "react";
import { View, Text, Button, Alert } from "react-native";
import CalendarEvents, {
  AuthorizationStatus,
} from "react-native-calendar-events";

export const Calendar = () => {
  const [permissionStatus, setPermissionStatus] =
    useState<AuthorizationStatus>("undetermined");

  useEffect(() => {
    requestCalendarPermission();
  }, []);

  const requestCalendarPermission = async () => {
    try {
      const status = await CalendarEvents.requestPermissions();
      setPermissionStatus(status);
      if (status !== "authorized") {
        Alert.alert("Permission denied");
      }
    } catch (error) {
      console.error("Error requesting permission:", error);
    }
  };

  const addSimpleEvent = async () => {
    if (permissionStatus !== "authorized") {
      Alert.alert("Calendar permission is not granted");
      return;
    }

    try {
      const eventDetails = {
        title: "Simple Event",
        startDate: new Date().toISOString(),
        endDate: new Date(
          new Date().setHours(new Date().getHours() + 1)
        ).toISOString(),
        notes: "This is a test event",
      };

      const eventId = await CalendarEvents.saveEvent(
        eventDetails.title,
        eventDetails
      );
      Alert.alert("Event added successfully", `Event ID: ${eventId}`);
    } catch (error) {
      console.error("Error adding event:", error);
      Alert.alert("Failed to add event");
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 18, marginBottom: 20 }}>
        Simple Calendar Demo
      </Text>
      <Button title="Add Event to Calendar" onPress={addSimpleEvent} />
    </View>
  );
};
