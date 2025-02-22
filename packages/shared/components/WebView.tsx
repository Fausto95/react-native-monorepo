import React from 'react';
import {View, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

export const WebVideo = ({}) => {
  const url = 'https://www.youtube.com/watch?v=4NRXx6U8ABQ';

  return (
    <View style={styles.container}>
      <WebView
        style={{height: 100, width: 350, backgroundColor: ''}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{html: '<h1 style="font-size:100px">Hello from HTML</h1>'}}
        allowsInlineMediaPlayback={true}
        androidLayerType="hardware"
      />
      <WebView
        style={styles.video}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{uri: url}}
        allowsInlineMediaPlayback={true}
        androidLayerType="hardware"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: 350,
    height: 300,
  },
});
