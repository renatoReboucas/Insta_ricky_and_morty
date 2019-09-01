
import React, { Component } from 'react';

import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';



// import { Container } from './styles';
export default class Likes extends Component {

  constructor() {
    super()
    this.state = {
      likers: [],
      likeada: false,
    }
  }

  exibeLikes(likers) {
    // console.warn('likers: ',likers)
    if (likers.length <= 0) {
      return;
    }
    return (
      <Text style={styles.likes}>
        {likers.length} {likers.length > 1 ? 'curtidas' : 'curtida'}
      </Text>
    )
  }


  carregaIcone(likeada) {
    // console.warn('likeada: ',likeada)
    return likeada ? require('../../resources/img/s2-checked.png') :
      require('../../resources/img/s2.png')
  }

  render() {
    const {likeada, likers, likeCallback} = this.props
    return (
      <View>
      <TouchableOpacity onPress={likeCallback}>
          <Image source={this.carregaIcone(likeada)}
          // require('../../resources/img/s2.png')
          style={styles.btnLike}
        />
      </TouchableOpacity>
        {this.exibeLikes(likers) }
      </View>
    );
  }

}

const styles = StyleSheet.create({
  btnLike: {
    width: 35,
    height: 35,
    marginBottom: 10
  },
  likes: {
    fontWeight: 'bold'
  },
})






