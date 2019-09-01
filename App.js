import React, { Component } from 'react';
import {

} from 'react-native';

import Feed from './src/components/Feed'
import Login from './src/screns/Login'

import Reactotron, { overlay } from 'reactotron-react-native';

console.tron = Reactotron
  .configure()
  .useReactNative()
  .use(overlay())
  .connect()



class App extends Component {

}

const OverlayApp = console.tron.overlay(App);
export default Login;
