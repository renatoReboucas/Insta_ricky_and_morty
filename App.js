

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  FlatList,
} from 'react-native';

import api from './src/services/api'
import Post from './src/components/Post'
import Reactotron, { overlay } from 'reactotron-react-native';

console.tron = Reactotron
  .configure()
  .useReactNative()
  .use(overlay())
  .connect()

const width = Dimensions.get('screen').width;

class App extends Component {

  constructor() {
    super();
    this.state = {
      fotos: []
    }
  }

  async componentDidMount(){
    // fetch('https://instalura-api.herokuapp.com/api/public/fotos/rafael')
    // .then(resposta => resposta.json())
    // .then(json => this.setState({ fotos: json }));
    const response = await fetch('https://rickandmortyapi.com/api/character/')
    const responseJson = await response.json()
    this.setState({ fotos: responseJson.results })  
      

    // console.tron.log(this.state.fotos)
  }

  

  render(){
  return (
    <FlatList style={styles.container}
      data={this.state.fotos}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) =>
        <Post foto={item}/>
      }
    />
  );
}
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30
  }

});
const OverlayApp = console.tron.overlay(App);
export default App;
