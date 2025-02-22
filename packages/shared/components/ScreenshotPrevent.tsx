import { useEffect } from "react";
import SP, { addListener } from "react-native-screenshot-prevent";

export const ScreenshotPrevent = () => {
  useEffect(() => {
    SP.enabled(true);
    SP.enableSecureView();
    addListener(() => {
      console.log("screenshot taken");
    });
  }, []);

  return null;
};
