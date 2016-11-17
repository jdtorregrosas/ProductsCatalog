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
  Card,
  CardItem,
  Thumbnail,
  Image
} from 'native-base';
import {Head} from './head.js';
export class Item extends Component {
  render() {
    return (
      <Container>
          <Content>
            <Head navigator={this.props.navigator} title={this.props.navigator.props.message}/>
            <Card style={{ flex: 0 }}>
                <CardItem>
                    <Thumbnail source={require('../img/yarumal.png')}/>
                    <Text>Test</Text>
                    <Text note>GeekyAnts</Text>
                </CardItem>

                <CardItem>                         
                </CardItem>

                <CardItem>
                    <Button transparent>
                        <Icon name="logo-github" />
                    </Button>                       
                </CardItem>
            </Card>
          </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
});
