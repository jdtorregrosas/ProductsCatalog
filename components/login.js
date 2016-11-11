import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';
import { Container, Content, List, ListItem, InputGroup, Input, Icon  } from 'native-base';

export class Login extends Component {
  render() {
    return (
  <Container>
        <Content>
            <List>
                <ListItem>
                    <InputGroup>
                        <Icon name='ios-person' />
                        <Input ref= "email" placeholder='EMAIL' />
                    </InputGroup>
                </ListItem>
            
                <ListItem>
                    <InputGroup>
                        <Icon name='ios-unlock' />
                        <Input ref= "password" placeholder='PASSWORD' secureTextEntry={true}/>
                    </InputGroup>
                </ListItem>
                <ListItem>
                	 <Button primary>
                        Iniciar Sesión
                        <Icon name='icon-login' />
                    </Button>
                </ListItem>
            </List>
        </Content>
    </Container>
    );
  }
}