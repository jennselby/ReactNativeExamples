/**
 * Adapted from https://facebook.github.io/react-native/docs/modal.html
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Modal,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

export default class ModalExample extends Component {
 constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  };

  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType={"slide"}
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
        >
          <View style={[styles.container, styles.modalContainer]}>
            <View style={styles.innerContainer}>
              <Text>Hello World!</Text>
              <TouchableHighlight
                style={styles.highlight}
                onPress={() => {this.setModalVisible(!this.state.modalVisible)}}
              >
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          style={styles.highlight}
          onPress={() => {this.setModalVisible(true)}}
        >
          <Text>Show Modal</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

AppRegistry.registerComponent('ModalExample', () => ModalExample);

var styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  modalContainer: {
    justifyContent: 'center',
  },
  innerContainer: {
    borderRadius: 10,
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 2,
    borderStyle: 'solid',
    shadowColor: '#333333',
    shadowOpacity: 0.8,
    shadowOffset: {width: 8, height: 8},
    shadowRadius: 5,
    backgroundColor: '#DDDDDD',
  },
  highlight: {
    alignItems: 'center',
    backgroundColor: '#AAAAAA',
    borderRadius: 10,
  }
});
