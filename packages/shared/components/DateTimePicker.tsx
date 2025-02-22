import React from "react";
import DTP from "@react-native-community/datetimepicker";

export const DateTimePicker = () => {
  return (
    <DTP
      mode="date"
      display="spinner"
      value={new Date()}
      style={{ width: 300, height: 300 }}
    />
  );
};
