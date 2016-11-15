import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';
import {
  List,
  ListItem,
  Text,
  Content,
  Container
} from 'native-base';

export class Catalog extends Component {
  render() {
    var names = ['Jake', 'Jon', 'Thruster'. 'test'];
    var namesList = names.map(function(name){
      return (<ListItem key={name}>
                <Text>{name}</Text>
            </ListItem>);
    })
    return (
      <Container>
          <Content>
              <List>
                 {namesList}
              </List>
          </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
});
