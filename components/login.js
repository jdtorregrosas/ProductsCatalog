import React, { Component } from 'react';
import {
  StyleSheet,AlertIOS, Alert
} from 'react-native';
import { Container, Content, List, ListItem, InputGroup, Input, Icon,Button  } from 'native-base';
import {Head} from './head.js';

export class Login extends Component {
    _navigate(name) {
        this.props.navigator.push({
        name: 'Catalog',
        message: name
        })
    }
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
  }
  _login = (email) => {
    debugger;
    if(email === '123'){
      console.log('hola!');
      //Alert.alert('Hola, mi nombre es Julianasdasdasdasdasdasd!');
      this._navigate('catalog');
    }
    else {
      Alert.alert('Mal!');
    }
  };
 render() {
    return (
  <Container>
        <Content>
            <Head navigator={this.props.navigator} title='Login'/>
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