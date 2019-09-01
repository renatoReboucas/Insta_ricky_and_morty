
import React, { Component } from 'react';

import { 
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
 } from 'react-native';

 import InputComentario from './InputComentario';
 import Likes from './Likes';

 
// import { Container } from './styles';
const width = Dimensions.get('screen').width;
export default class Post extends Component {

  constructor(props){
    super(props)
    this.state = {
      foto: props.foto,
      likeada: false,
      likers:[] ,
      comentario: 'Comentario da foto',
      comentarios: [
        {
          id: 1,
          login: '06',
          texto: 'Nice!',
        },
      ],
      login: '',
      texto: '',
      valorComentario: '',
    }
  }

  like(){
    // console.warn("entrou");
    let novaLista = []
    const like = this.state.likeada
    if( !this.state.likeada ){
      novaLista = [
        ...this.state.likers,
        {login: 'meuUsuario'}
      ]
    }else{
      novaLista = this.state.likers.filter(liker =>{
        return liker.login !== 'meuUsuario'
      })
    }
    
    
    this.setState({ likeada: !like, likers: novaLista })
  } 

  

  exibeLegenda(comentario , foto){
    if( comentario === '' ){
      return;
    }

    return ( 
    <View style={styles.comentario} >
      <Text style={styles.tituloName}>{foto.name}</Text>
      <Text>{comentario}</Text>
    </View>
    )
  }


  adicionaComentario(valorComentario, inputComentario){
    
    if( valorComentario === '' ){
      return;
    }

    const novaLista = [...this.state.comentarios,{
      id: valorComentario,
      login: 'meuUsuario',
      texto: valorComentario
    }]
    this.setState({ comentarios: novaLista})
    inputComentario.clear()

  }

  render() {
    const { foto } = this.state;
    return (
      <View>
        <View style={styles.cabecalho}>
          <Image source={{ uri: foto.image }}
            style={styles.fotoDePerfil}
          />
          <Text style={styles.tituloName} > {foto.name} </Text>
        </View>
        <Image source={{ uri: foto.image }}
          style={styles.foto}
        />
        <View style={styles.rodape}>

          <Likes likeada={this.state.likeada} likers={this.state.likers} foto={foto} likeCallback={this.like.bind(this)} />
          
          {this.exibeLegenda(this.state.comentario, foto)}

          {this.state.comentarios.map(comentario =>
            <View style={styles.comentario} key={comentario.id}>
              <Text style={styles.tituloName} >{comentario.login}</Text>
              <Text>{comentario.texto}</Text>
            </View>
        )}

          <InputComentario comentarioCallback={this.adicionaComentario.bind(this)}/>

       

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
  
  rodape:{
    margin: 15
  },
 
  comentario:{
    flexDirection: 'row'

  },
  tituloName:{
    fontWeight: 'bold',
    marginRight: 5
  },



});

