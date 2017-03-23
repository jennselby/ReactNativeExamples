import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import ModalExample from './ModalExample.js';

export default class PopUp extends Component {
  render() {
    return (
      <ModalExample />
    );
  }
}

AppRegistry.registerComponent('PopUp', () => PopUp);
