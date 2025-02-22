import { useEffect } from "react";
import KA from "react-native-keep-awake";

export const KeepAwake = () => {
  useEffect(() => {
    KA.activate();
  }, []);

  return null;
};
