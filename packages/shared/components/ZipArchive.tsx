import React from "react";
import { View, Button } from "react-native";
import { zip, unzip, unzipAssets } from "react-native-zip-archive";

export const ZipArchive = () => {
  const handleZip = async () => {
    // const result = await zip(DocumentDirectoryPath, "test.zip");
    // console.log(result);
  };

  return (
    <View>
      <Button title="Zip" onPress={() => handleZip()} />
      {/* <Button title="Unzip" onPress={() => unzip()} />
      <Button title="Unzip Assets" onPress={() => unzipAssets()} /> */}
    </View>
  );
};
