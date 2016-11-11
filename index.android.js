/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
//import { Home } from './components/home.js';
import { Login } from './components/login.js';

export default class ProductsCatalog extends Component {
  render() {
    return (
      <Login />
    );
  }
}

AppRegistry.registerComponent('ProductsCatalog', () => ProductsCatalog);
