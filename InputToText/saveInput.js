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
  TextInput,
  Button,
  View
} from 'react-native';

export default class SaveInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
        value: '',
        set: false,
    };
  }

  render() {
    if (this.state.set) {
      var box = (
        <View style={styles.container}>
          <Text style={styles.text}>{this.state.value}</Text>
        </View>
      );
    } else {
      var box = (
        <View style={styles.container}>
          <TextInput
            placeholder='Type here'
            style={styles.text}
            onChangeText={(text) => this.setState({value: text})}
            onSubmitEditing={() => this.setState({set: true})}
          />
          <Button
            onPress={() => this.setState({set: true})}
            title='Set'
          />
        </View>
      );
    }
    return (
        box
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    height: 40,
    width: 200
  },
});

AppRegistry.registerComponent('SaveInput', () => SaveInput);
