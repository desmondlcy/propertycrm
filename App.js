import React, { Component } from 'react';
import { View } from 'react-native';
import { createStore , applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import Router from './Src/Router'

export default class App extends Component {

  render() {

    return (
            <Router />
    );
  }
}
