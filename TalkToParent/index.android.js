/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import Parent from './parent.js';

export default class TalkToParent extends Component {
  render() {
    return (
      <Parent />
    );
  }
}

AppRegistry.registerComponent('TalkToParent', () => TalkToParent);
