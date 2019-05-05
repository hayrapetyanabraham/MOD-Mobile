import React from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';

export default class ScreenCall extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Button
           onPress={() => this.props.navigation.navigate('ScreenAbout')}
            title="Screen About"
          />
        </View>
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