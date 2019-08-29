
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
  TouchableOpacity,
 } from 'react-native';


// import { Container } from './styles';
const width = Dimensions.get('screen').width;
export default class Post extends Component {

  constructor(props){
    super(props)
    this.state = {
      foto: this.props.foto,
      likeada: false,
    }
  }

  like(){
    const like = this.state.likeada
    // const fotoLike = {
    //   ...this.state.likeada,
    //   likeada: !this.state.likeada 
    // } 

    this.setState({ likeada: !like })
    

    // this.setState({ likeada: fotoLike })
    // console.warn(this.state.likeada)
    // console.warn(this.fotoLike)
    
  } 

  carregaIcone(like){
    return like ? require('../../resources/img/s2-checked.png') :
      require('../../resources/img/s2.png')
  }

  render() {
    const { foto } = this.state;
    return (
      <View>
        <View style={styles.cabecalho}>
          <Image source={{ uri: foto.image }}
            style={styles.fotoDePerfil}
          />
          <Text> {foto.name} </Text>
        </View>
        <Image source={{ uri: foto.image }}
          style={styles.foto}
        />
        <View style={styles.rodape}>
          <TouchableOpacity onPress={this.like.bind(this)}>
            <Image source={this.carregaIcone(this.state.likeada) } 
              // require('../../resources/img/s2.png')
                style={ styles.btnLike }
              />
          </TouchableOpacity>
        </View>
      </View>


    )
  }
}
const styles = StyleSheet.create({
  cabecalho: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  fotoDePerfil: {
    marginRight: 10,
    borderRadius: 20,
    width: 40, height: 40
  },
  foto: {
    width: width,
    height: width
  },
  btnLike: {
    width: 30,
    height: 30,
  },
  rodape:{
    margin: 10
  }


});

