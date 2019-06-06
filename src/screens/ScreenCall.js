import React from 'react';
import { StyleSheet, ImageBackground, TouchableOpacity, Text, View } from 'react-native';

export default class ScreenCall extends React.Component {

  ButtonClickCheckFunction = () => {
    this.props.navigation.navigate('ScreenCodeVerify')
  }

  render() {
    return (
      <ImageBackground source={require('./images/background_small_elements.png')} style={styles.container}>
        <View style={styles.bottomView} >
          <TouchableOpacity
            style={styles.SubmitButtonStyle}
            activeOpacity={.5}
            onPress={this.ButtonClickCheckFunction}>
            <Text style={styles.TextStyle}> այո </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
  },

  bottomView: {
    width: '100%',
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0
  },

  SubmitButtonStyle: {
    height: 42,
    width: 160,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#5c2684',
    borderRadius: 30,
    borderColor: '#fff'
  },
  TextStyle: {
    color: '#fff',
    textAlign: 'center',

  },
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined
  }
});
