import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Button,
} from 'react-native';

export default class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  addOne() {
    if (this.state.value == 9) {
      this.props.overflow();
      this.reset();
    } else {
      this.setState({value: this.state.value + 1});
    }
  }

  reset() {
    this.setState({value: 0});
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
            style={{flex: 1}}
            color='#841584'
            title={'' + this.state.value}
            accessibilityLabel='Add one'
            onPress={() => this.addOne()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderColor: '#ffffff',
    borderWidth: 3,
    borderRadius: 10,
    borderStyle: 'solid',
    marginRight: 5,
    marginLeft: 5,
  }
});

AppRegistry.registerComponent('Child', () => Child);
