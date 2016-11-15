import React, { Component } from 'react';
import {
  StyleSheet,AlertIOS, Alert
} from 'react-native';
import { Container, Content, List, ListItem, InputGroup, Input, Icon,Button  } from 'native-base';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: null, password: null };
  }
 render() {
  const onButtonPress = () => {
    Alert.alert('Hola, mi nombre es Julian!');
  };
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
                	 <Button primary onPress={onButtonPress}>
                        Iniciar Sesión
                    </Button>
                </ListItem>
            </List>
        </Content>
    </Container>
    );
  }
}