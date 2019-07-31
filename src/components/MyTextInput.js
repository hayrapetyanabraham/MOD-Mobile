import React, { Component } from 'react';
import { StyleSheet, TextInput  } from 'react-native';

const BLUE = "#428AF8";
const LIGHT_GRAY = "#428AF8";

export default class MyTextInput extends React.Component {
  state = {
    isFocused: false
  };

  handleFocus = event => {
    this.setState({ isFocused: true });
    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  };

  handleBlur = event => {
    this.setState({ isFocused: false });
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  };

  render() {
    const { isFocused } = this.state;
    const { onFocus, onBlur } = this.props;
    return (

      <TextInput
        selectionColor={BLUE}
        underlineColorAndroid={
          isFocused ? BLUE : LIGHT_GRAY
        }
        placeholder="Phone number"
        keyboardType={'phone-pad'}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        value={this.props.value}
        editable={this.props.editable}
        onChangeText={this.props.onChangeText}
        style={styles.textInput}
      />
    );
  }
}
const styles = StyleSheet.create({
    textInput: {
      height: 50,
      width: '60%',
      fontSize: 20,
      color: 'blue',
      paddingLeft: 16
    }
  });
  