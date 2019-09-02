

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Dimensions,
  FlatList,
} from 'react-native';

import Post from './Post'

const width = Dimensions.get('screen').width;

export default class Feed extends Component {

  constructor() {
    super();
    this.state = {
      fotos: []
    }
  }

  async componentDidMount() {
    // https://instalura-api.herokuapp.com/api/public/fotos/rafael
    const response = await fetch('https://rickandmortyapi.com/api/character/')
    const responseJson = await response.json()
    this.setState({ fotos: responseJson.results })
  }

  render() {
    return (
      <FlatList style={styles.container}
        data={this.state.fotos}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) =>
          <Post foto={item} />
        }
      />
    );
  }
}
// verificando qual plataforma e
const margin = Platform.OS === 'ios' ? 30 : 0
const styles = StyleSheet.create({
  container: {
    marginTop: margin
  }

});

// export default Feed;
