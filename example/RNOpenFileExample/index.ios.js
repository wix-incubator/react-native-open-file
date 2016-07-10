/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import OpenFile from 'react-native-open-file';
import fs from 'react-native-fs';

const downloadAndOpen = (url, name, type) => {
  const destination = fs.TemporaryDirectoryPath + name + '.' + type;
  fs.downloadFile({
    fromUrl: url,
    toFile: destination,
    background: false,
    progressDivider: 10,
    begin: () => console.log('starting download'),
    progress: ({contentLength, bytesWritten}) => console.log('download progress: ', 100.0 * bytesWritten / contentLength)
  }).then(() => OpenFile.open(destination));
};

const files = [
  {type: 'jpg', name: 'Monkey', path: 'http://data.whicdn.com/images/16584615/thumb.jpg'},
  {type: 'pdf', name: 'Random PDF', path: 'http://www.pdf995.com/samples/pdf.pdf'}
];

const RNOpenFileExample = props =>
  <View style={styles.container}>
    {files.map(file =>
      <TouchableHighlight key={file.name} onPress={() => downloadAndOpen(file.path, file.name, file.type)}>
        <Text style={styles.instructions}>
          Click to download and view {file.type}
        </Text>
      </TouchableHighlight>
    )}
  </View>
;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('RNOpenFileExample', () => RNOpenFileExample);
