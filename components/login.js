import React, { Component } from 'react';
import {
  StyleSheet,AlertIOS, Alert
} from 'react-native';
import { Container, Content, List, ListItem, InputGroup, Input, Icon,Button  } from 'native-base';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
  }
  _login = (email) => {
    debugger;
    if(email === '123'){
      console.log('hola!');
      Alert.alert('Hola, mi nombre es Julianasdasdasdasdasdasd!');
    }
    else {
      Alert.alert('Mal!');
    }
  };
 render() {
    return (
  <Container>
        <Content>
            <List>
                <ListItem>
                    <InputGroup>
                        <Icon name='ios-person' />
                        <Input ref="email" onChangeText={(email) => this.setState({email})} placeholder='EMAIL' />
                    </InputGroup>
                </ListItem>
            
                <ListItem>
                    <InputGroup>
                        <Icon name='ios-unlock' />
                        <Input ref="password" placeholder='PASSWORD' secureTextEntry={true}/>
                    </InputGroup>
                </ListItem>
                <ListItem>
                	 <Button primary onPress={() => this._login(this.state.email)}>
                        Iniciar Sesión
                    </Button>
                </ListItem>
            </List>
        </Content>
    </Container>
    );
  }
}