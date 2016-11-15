import React, { Component } from 'react';
import {
  StyleSheet,AlertIOS
} from 'react-native';
import { Container, Content, List, ListItem, InputGroup, Input, Icon,Button  } from 'native-base';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: null, password: null };
  }
  login(){
        AlertIOS.alert('algo Sync Complete','All your data are belong to us.');
    if(this.state.email == 'Luis'){
        AlertIOS.alert('Sync Complete','All your data are belong to us.');
    }
    else{
        AlertIOS.alert('MAL Sync Complete','All your data are belong to us.');
    }
  }
 render() {
    return (
  <Container>
        <Content>
            <List>
                <ListItem>
                    <InputGroup>
                        <Icon name='ios-person' />
                        <Input ref="email" onChangeText={(text) => this.setState({text})} placeholder='EMAIL' />
                    </InputGroup>
                </ListItem>
            
                <ListItem>
                    <InputGroup>
                        <Icon name='ios-unlock' />
                        <Input ref="password" placeholder='PASSWORD' secureTextEntry={true}/>
                    </InputGroup>
                </ListItem>
                <ListItem>
                	 <Button primary  onPress={this.login()}>
                        Iniciar Sesión
                    </Button>
                </ListItem>
            </List>
        </Content>
    </Container>
    );
  }
}