import React, { Component } from 'react';

import { 
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  Button,
  Text,
  AsyncStorage,
} from 'react-native';
import { asyncStorage } from 'reactotron-react-native';


// import { Container } from './styles';
const width = Dimensions.get('screen').width;
export default class Login extends Component {

  constructor() {
    super();
    this.state = {
      usuario: '',
      senha:'',
      mensagem: '',
    }

  }

  efetuaLogin(){
    // console.warn("login: ", this.state.usuario, "senha: ", this.state.senha)
    if( this.state.usuario === "renato" && this.state.senha === "123" ){
      // console.warn("Login feito")
      // const token = '123456'
      AsyncStorage.setItem('token', '123456')
      AsyncStorage.setItem('usuario', this.state.usuario)
      // const dados =  AsyncStorage.getItem('token')
      // console.warn( dados )
    }else{
      this.setState({mensagem : 'Nao foi possivel efetuar o login'})
    }
    // throw new Error("Nao foi possivel efetuar o login")
    
  }

  render() {
    return ( 
    <View style={styles.container}>
      <Text style={styles.titulo}>Insta Ricky and Morty</Text>
      <View style={styles.form}>
          <TextInput style={styles.input} placeholder="Usuario" 
            onChangeText={texto => this.setState({usuario: texto})}
            autoCapitalize="none"
          />
          <TextInput style={styles.input} placeholder="Senha"
            onChangeText={texto => this.setState({senha: texto })}
            autoCapitalize="none"
            secureTextEntry={true}
          />
          <Button title="Login" onPress={ this.efetuaLogin.bind(this) } />
      </View>
        <Text style={styles.msg}>
          {this.state.mensagem}
        </Text>
    </View>
      
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  form:{
    width: width * 0.8
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  titulo:{
    fontWeight: 'bold',
    fontSize: 26,
    marginBottom:3
  },
  msg: {
    margin: 15,
    color: '#e74c3c'
  }
})
