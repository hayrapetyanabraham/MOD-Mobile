import React, { Component } from 'react';
import { StyleSheet, TextInput } from 'react-native';

const BLUE = "#428AF8";
const PINK = "#5c2684";

export default class VerifyCodeTextInput extends React.Component {
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
                    PINK
                }
                maxLength={1}
                placeholder=" "
                textAlign={'center'}
                keyboardType={'phone-pad'}
                onFocus={this.handleFocus}
                style={styles.textInput}
            />
        );
    }
}
const styles = StyleSheet.create({
    textInput: {
        height: 50,
        width: 40,
        margin: 8,
        textAlignVertical: "center",
        justifyContent: "center",
        fontSize: 20,
        color: '#5c2684'
    }
});
