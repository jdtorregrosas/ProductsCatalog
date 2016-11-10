/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import { Home } from './components/home.js';

export default class ProductsCatalog extends Component {
  render() {
    return (
      <Home />
    );
  }
}

AppRegistry.registerComponent('ProductsCatalog', () => ProductsCatalog);
