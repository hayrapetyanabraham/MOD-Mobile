import React, { Component } from 'react';
import { Platform, Keyboard, StyleSheet, Image, Text, TextInput, AppRegistry, TouchableOpacity, Alert, View, ImageBackground, Dimensions, ScrollView } from 'react-native';

import CodeInput from 'react-native-confirmation-code-input';

export default class ScreenCodeVerify extends React.Component {

    constructor() {
        super();
        this.componentWillMount();
    }

    state = {
        isCode: true
    }

    componentWillMount () {
      this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
      this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
    }
  
    componentWillUnmount () {
      this.keyboardDidShowListener.remove();
      this.keyboardDidHideListener.remove();
    }
  
    _keyboardDidShow = () => {
      this.setState({
        isCode: true
      });
    }
  
    _keyboardDidHide = () => {
      this.setState({
        isCode: false
      });
    }

    _handleChangeText = ({ nativeEvent: { text } }) => {
        this.setState({ isCode: true })
      };

    ButtonClickCheckFunction = () => {
        this.props.navigation.navigate('ScreenSendSMS')
    }

    showHomeScreen = () => {
        this.props.navigation.navigate('ScreenHome')
    }

    onTryAgainClick = () => {
        if (this.state.isCode == true) {
            this.setState({ isCode: false })
        }
        else {
            this.setState({ isCode: true })
        }
    }

    render() {
        return (
            <ImageBackground source={require('./images/background_small_elements.png')} style={styles.container}>

                <View style={{ flex: 10 }}>
                    <View style={{ width: '100%', flex: 2 }} >
                    </View>
                    <View style={{
                        height: '100%',
                        flex: 4,
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                    }} >
                        <View style={{ flex: 1, alignItems: 'center', flexDirection: 'column' }} >
                            {this.state.isCode ? null : <Image style={{ flex: 1 }} source={require('./images/ic_error.png')}
                                resizeMode="contain" />}

                            {this.state.isCode ? <Text style={styles.textInputCode} textAlign={'center'} > Մուտքագրեք SMS - ի կեդը </Text> :
                                <Text style={styles.textErrorHeader} textAlign={'center'} > Մուտքագրած կոդը սխալ է </Text>}

                        </View>
                        <View style={{ flex: 1 }} >
                            {this.state.isCode ? <CodeInput
                                ref="codeInputRef1"
                                secureTextEntry
                                className={'border-b'}
                                activeColor='rgba(92, 38, 132, 1)'
                                inactiveColor='rgba(92, 38, 132, 1.3)'
                                space={20}
                                keyboardType="numeric"
                                onSubmitEditing={Keyboard.dismiss}
                                codeLength={4}
                                size={32}
                                onFulfill={this.onTryAgainClick}
                            /> :
                                <CodeInput
                                    ref="codeInputRef1"
                                    secureTextEntry
                                    className={'border-b'}
                                    activeColor='rgba(151, 6, 6, 1)'
                                    inactiveColor='rgba(151, 6, 6, 1)'
                                    space={20}
                                    keyboardType="numeric"
                                    onSubmitEditing={Keyboard.dismiss}
                                    codeLength={4}
                                    size={32}
                                    onFulfill={this.onTryAgainClick}
                                />}
                        </View>
                        <View style={{ flex: 1 }} >
                            {this.state.isCode ? <Text style={styles.textSendAgan} onPress={this.ButtonClickCheckFunction}> Ուղարկել կոդը կրկին </Text> : null}
                            {this.state.isCode ? null : <Text style={styles.textSendAganCenter} onPress={this.showHomeScreen} >  Ուղարկել կոդը կրկին </Text>}
                        </View>

                    </View>
                    <View style={{ height: '100%', flex: 4 }} >
                        <Image source={require('./images/ic_girl_in_fall_fashi_on_5_sitting.png')}
                            resizeMode="contain" />
                    </View>
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

    backgroundImage: {
        flex: 1,
        alignSelf: 'stretch',
        width: undefined,
        height: undefined
    },

    hidden: {
        width: 0,
        height: 0,
    },

    textInputCode: {
        justifyContent: 'center',
        color: '#5c2684',
        flex: 1,
        fontSize: 18,
        alignItems: 'center',
        position: 'absolute',
        bottom: 0
    },

    textErrorHeader: {
        justifyContent: 'center',
        color: '#970606',
        flex: 1,
        fontSize: 18,
        alignItems: 'center',
        position: 'absolute',
        bottom: 0
    },

    icError: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0
    },

    textSendAgan: {
        flex: 1,
        width: '75%',
        color: '#5c2684',
        textAlign: 'right',
        fontSize: 13,
        bottom: 0
    },

    textSendAganCenter: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        color: '#605f5f',
        textAlign: 'center',
        fontSize: 18,
        bottom: 0
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
