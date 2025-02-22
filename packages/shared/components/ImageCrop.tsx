import React, { useState } from "react";
import { Button } from "react-native";
import { View, Image } from "react-native";
import ImageCropPicker from "react-native-image-crop-picker";

export const ImageCrop = () => {
  const [image, setImage] = useState<any>(null);

  const openCropper = () => {
    ImageCropPicker.openCropper({
      path: "./assets/image.jpg",
      width: 300,
      height: 400,
      mediaType: "photo",
    }).then((image) => {
      setImage(image);
    });
  };

  return (
    <View>
      <Button title="Open Cropper" onPress={openCropper} />
      {image && <Image source={{ uri: image }} />}
    </View>
  );
};
