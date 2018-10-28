/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, NativeModules, TouchableOpacity} from 'react-native';

const DocumentInteractionController = NativeModules.RNDocumentInteractionController;

const openFile = () => DocumentInteractionController.open('sample.pdf');

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={openFile}><Text>Open File</Text></TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
