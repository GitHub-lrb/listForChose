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
    View,
    Dimensions
} from 'react-native';
import FirstPage from './firstPage'
const window = Dimensions.get('window');


export default class LearnMobx extends Component {
  render() {
    return (
        <View style={styles.container}>
          <FirstPage style = {{width:window.width,height:window.height}}/>
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

AppRegistry.registerComponent('LearnMobx', () => LearnMobx);
