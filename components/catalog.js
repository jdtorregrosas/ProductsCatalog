import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';
import {
  List,
  ListItem,
  Text,
  Content,
  Container,
  Footer,
  FooterTab,
  Button,
  Icon,
  CardItem,
  Card,
  Thumbnail,
  Header,
  Title
} from 'native-base';
import {Head} from './head.js';
export class Catalog extends Component {
  _navigate(name) {
    this.props.navigator.push({
      name: 'item',
      message: name
    })
  }

  render() {
    var names = ['Jake', 'Jon', 'Thruster', 'test'];
    var namesList = names.map((name) => {
      return (
        <CardItem key={name} button onPress={() => this._navigate(name)}>
            <Thumbnail key={name} source={require('../img/yarumal.png')}/>
            <Text key={name}>{name}</Text>
        </CardItem>
      );
    });
    return (
      <Container>
          <Content>
          <Head navigator={this.props.navigator} title='Items Catalog'/>
            <Card>
                {namesList}
            </Card>
          </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
});
