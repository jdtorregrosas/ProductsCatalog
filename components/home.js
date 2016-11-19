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
              <Text>Bienvenido al catalogo</Text>
              <Button>Iniciar Sesión</Button>
              <Button transparent>
                  <Icon name='ios-menu' />
              </Button>
          </Header>
      </Container>
    );
  }
}