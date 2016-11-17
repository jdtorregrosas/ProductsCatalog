/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator
} from 'react-native';
import { Home } from './components/home.js';
import { Catalog } from './components/catalog.js';
import { Item } from './components/item.js';

export default class ProductsCatalog extends Component {
   renderScene(route, navigator) {
    if(route.name == 'Catalog') {
      return <Catalog navigator={navigator} {...route.passProps}  />
    }
    if(route.name == 'Home') {
      return <Home navigator={navigator} {...route.passProps}  />
    }
    if(route.name == 'item') {
      return <Item navigator={navigator} {...route.passProps}  />
    }
  }
  
  render() {
    return (
      <Navigator
        style={{ flex:1 }}
        initialRoute={{ name: 'Catalog' }}
        renderScene={ this.renderScene } />
    )
  };
}

AppRegistry.registerComponent('ProductsCatalog', () => ProductsCatalog);
