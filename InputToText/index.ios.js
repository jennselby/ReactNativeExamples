import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import SaveInput from './saveInput.js';

export default class InputToText extends Component {
  render() {
    return (
      <SaveInput />
    );
  }
}

AppRegistry.registerComponent('InputToText', () => InputToText);
