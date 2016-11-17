import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';
import {
  Button,
  Icon,
  Header,
  Title
} from 'native-base';

export class Head extends Component {
    _back(){
        this.props.navigator.pop();
    }
    render(){
        return (
            <Header>
            <Button transparent onPress={() => this._back()}>
                <Icon name='ios-arrow-back' />
            </Button>
            <Title>{this.props.title}</Title>
            <Button transparent>
                <Icon name='ios-menu' />
            </Button>
          </Header>
        );
    }
}