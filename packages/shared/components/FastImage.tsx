import React from "react";
import RNFastImage from "react-native-fast-image";

export const FastImage = () => {
  return (
    <RNFastImage
      style={{ width: 200, height: 200 }}
      source={{
        uri: "https://avatars.githubusercontent.com/u/13098662?s=200&v=4",
        priority: RNFastImage.priority.normal,
      }}
      resizeMode={RNFastImage.resizeMode.contain}
    />
  );
};
