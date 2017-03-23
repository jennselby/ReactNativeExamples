// Ideas from http://andrewhfarmer.com/component-communication/

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import Child from './child.js';

export default class Parent extends Component {
  overflowOnes() {
    this.tens.addOne();
  }

  overflowTens() {
    this.hundreds.addOne();
  }

  overflowHundreds() {
    this.ones.reset();
    this.tens.reset();
  }

  render() {
    return (
      <View style={styles.container}>
        <Child overflow={this.overflowHundreds.bind(this)} ref={(hundreds) => {this.hundreds = hundreds}} />
        <Child overflow={this.overflowTens.bind(this)} ref={(tens) => {this.tens = tens}} />
        <Child overflow={this.overflowOnes.bind(this)} ref={(ones) => {this.ones = ones}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#d8a9d8',
  },
});

AppRegistry.registerComponent('Parent', () => Parent);
