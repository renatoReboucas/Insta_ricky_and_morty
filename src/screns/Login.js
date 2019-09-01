import React, { Component } from 'react';

import { 
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  Button,
  Text,
} from 'react-native';

// import { Container } from './styles';
const width = Dimensions.get('screen').width;
export default class Login extends Component {

  efetuaLogin(){
    console.warn(this.state.usuario)
    if( this.state.usuario === 'renato' && this.state.senha === 'mudar123' ){
      console.warn("ok")
    }
    throw new Error("Nao foi possivel efetuar o login")
  }

  render() {
    return ( 
    <View style={styles.container}>
      <Text style={styles.titulo}>Insta Ricky and Morty</Text>
      <View style={styles.form}>
          <TextInput style={styles.input} placeholder="Usuario" 
            onChangeText={texto => this.setState({usuario: texto})}
          />
          <TextInput style={styles.input} placeholder="Senha"
            onChangeText={texto => this.setState({senha: texto })}
          />
          <Button title="Login" onPress={ this.efetuaLogin.bind(this) } />
      </View>
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
  }
})
