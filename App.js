/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Button, Text, View} from 'react-native';

import {
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';

import ScreenCodeVerify from "./src/screens/ScreenCodeVerify";
import ScreenSendSMS from './src/screens/ScreenSendSMS';
import ScreenHome from './src/screens/ScreenHome';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.welcome}>Change Screens!</Text>
          <Button
            onPress={() => this.props.navigation.navigate('ScreenCodeVerify')}
            title="Start"
          />
        </View>
      </View>
    );
  }
}

const AppNavigator = createSwitchNavigator({
  ScreenSendSMS: ScreenSendSMS,
  ScreenCodeVerify: ScreenCodeVerify,
  ScreenHome : ScreenHome
});

export default createAppContainer(AppNavigator);

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