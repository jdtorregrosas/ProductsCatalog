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
import {global} from './global.js';
export class Catalog extends Component {
  _navigate(name) {
    this.props.navigator.push({
      name: 'item',
      message: name
    })
  }
  itemDetail(name){
    this._navigate(name);
    global.name = name;
  }
  render() {
    var names = ['Jake', 'Jon', 'Thruster', 'test', 'luis', 'hola', 'nos', 'lo creo'];
    var namesList = names.map((name) => {
      return (
        <CardItem key={name} button onPress={() => this.itemDetail(name)}>
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
