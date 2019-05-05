import React, { Component } from 'react';
import { Platform, StyleSheet, Image, Text, TextInput, AppRegistry, TouchableOpacity, Alert, View, ImageBackground, Dimensions, ScrollView } from 'react-native';
import CustomTextInput from "../components/MyTextInput";

export default class ScreenSendSMS extends React.Component {
  ButtonClickCheckFunction = () => {
    this.props.navigation.navigate('ScreenCodeVerify')
  }
  render() {
    return (

      <ImageBackground source={require('./images/background_small_elements.png')} style={styles.container}>
        <View style={{ flex: 1 }}>
        
          <View style={{ flex: 0.35 }}>
          </View>
          <View style={{ flex: 0.15, alignItems: 'center' }} >
            <CustomTextInput />
          </View>
          <View style={{ flex: 0.5, alignItems: 'center', justifyContent: "center" }} >
            <Image source={require('./images/model_In_overalls_1.png')}
              style={styles.mark} resizeMode="contain" />
            <View style={{ marginBottom: "15%", alignItems: 'center', justifyContent: "center" }}>
              <TouchableOpacity
                style={styles.SubmitButtonStyle}
                activeOpacity={.5}
                onPress={this.ButtonClickCheckFunction}>
                <Text style={styles.TextStyle}> Send code </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    // remove width and height to override fixed static size
    width: null,
    height: null,
  },

  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined
  },
  SubmitButtonStyle: {
    height: 48,
    width: '60%',
    position: 'absolute',
    textAlignVertical: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5c2684',
    borderRadius: 30,
    borderColor: '#fff'
  },
  TextStyle: {
    color: '#fff',
    textAlign: 'center',

  },
  mark: {
    position: 'absolute',
    flex: 1,
  }
});
