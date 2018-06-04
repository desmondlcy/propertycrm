import React , { Component } from 'react';
import PropTypes from 'prop-types';
import { Image,StyleSheet, Text, View, ViewPropTypes } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Input, Card, CardSection , Spinner }  from './common';
import Icon from 'react-native-elements';
import { Confirm }  from './common';

class DrawerContent extends Component {

  state = { popMessage: true };

  onNoPress(){
    this.setState( {popMessage: false} );
  };

  onYesPress(){
    this.setState( {popMessage: true} );
    Actions.auth({ type: 'reset'})
  }

  render() {
    return (
      <Card style={{flex:1}}>
      <Image
        style={{backgroundColor: 'white', alignSelf: 'center', width: 100, height: 100, marginTop:30, marginBottom:30}}
        source={require('./images/utipaylogo.gif')}
      />
        </Card>
    );
  }
}
const styles = {
mainConatinerStyle: {
    flexDirection: 'column',
    flex: 1
},floatingMenuButtonStyle: {
    alignSelf: 'flex-start',
    position: 'absolute',
    bottom: 35
},
teststyle: {
    flexDirection: 'column',
    flex: 1,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0
}
}
export default DrawerContent;
