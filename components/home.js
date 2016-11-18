import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';
import {
  Text,
  Container,
  Header,
  Button,
  Title,
  Icon
} from 'native-base';

export class Home extends Component {
  render() {
    return (
      <Container>
          <Header>
              <Button transparent>
                  <Icon name='ios-arrow-back' />
              </Button>

              <Title>Home</Title>

              <Button transparent>
                  <Icon name='ios-menu' />
              </Button>
          </Header>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
