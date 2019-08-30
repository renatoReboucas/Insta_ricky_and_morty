
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
  TextInput,
 } from 'react-native';


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
          texto: 'Bela foto!',
        },
      ],
      login: '',
      texto: '',
      valorComentario: '',
    }
  }

  like(){
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

  exibeLikes(likers){
    if( likers.length <= 0 ){
      return;
    }
    return (
      <Text style={styles.likes}>
        {likers.length} {likers.length > 1 ? 'curtidas' : 'curtida'}
      </Text>
    )
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

  carregaIcone(like){
    return like ? require('../../resources/img/s2-checked.png') :
      require('../../resources/img/s2.png')
  }

  adicionaComentario(){
    
    if( this.state.valorComentario === '' ){
      return;
    }

    const novaLista = [...this.state.comentarios,{
      id: this.state.valorComentario,
      login: 'meuUsuario',
      texto: this.state.valorComentario
    }]
    this.setState({ comentarios: novaLista, valorComentario: '' })
    this.inputComentario.clear()

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
          <TouchableOpacity onPress={this.like.bind(this)}>
            <Image source={this.carregaIcone(this.state.likeada) } 
              // require('../../resources/img/s2.png')
                style={ styles.btnLike }
              />
          </TouchableOpacity>
          
          
          {this.exibeLikes(this.state.likers)}
          
          {this.exibeLegenda(this.state.comentario, foto)}

          {this.state.comentarios.map(comentario =>
            <View style={styles.comentario} key={comentario.id}>
              <Text style={styles.tituloName} >{comentario.login}</Text>
              <Text>{comentario.texto}</Text>
            </View>
        )}

        <View style={styles.novoComentario}>
            <TextInput style={styles.input}
              placeholder="Adicione um comentario..."
              ref={ input => this.inputComentario = input }
              onChangeText={texto => this.setState({valorComentario: texto})}
              />

            <TouchableOpacity onPress={ this.adicionaComentario.bind(this) }>
              <Image style={styles.icone} 
              source={require('../../resources/img/send.png')} >
              </Image>
            </TouchableOpacity>
        </View>

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
    width: 35,
    height: 35,
    marginBottom: 10
  },
  rodape:{
    margin: 15
  },
  likes:{
    fontWeight: 'bold'
  },
  comentario:{
    flexDirection: 'row'

  },
  tituloName:{
    fontWeight: 'bold',
    marginRight: 5
  },
  input: {
    flex: 1,
    height: 40,
  },
  icone:{
    width: 30,
    height: 30
  },
  novoComentario:{
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },


});

