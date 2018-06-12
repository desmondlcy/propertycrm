import React, { Component } from 'react';
import { Input, Card, CardSection , Spinner }  from '../common';
import { Actions } from 'react-native-router-flux';
//import firebase from 'firebase';
import { connect } from 'react-redux';
import { Text , View , Image , Platform } from 'react-native';
//import SplashScreen from 'react-native-splash-screen'
import { emailChanged , passwordChanged, loginUser , loginUserToken } from '../../actions';
import { Tile , Overlay , Header , SearchBar , SocialIcon , Button } from 'react-native-elements'


class LoginFormMain extends Component {

state = {overlayVisible: true};


onFBLoginPress() {
  Actions.welcome({type : 'reset'});
}

render() {
  return(
    <View style={styles.containerStyle}>
      <Tile
        imageSrc={require('../images/open-house-logo.jpg')}
        caption='test'
      >
      <View style={{alignSelf:'center' , justifyContent:'center'}}>
        {titleAD}
      </View>
      <View style={{alignSelf:'center' , justifyContent:'center'}}>
        {titleSub}
      </View>
      </Tile>
      <View>
      <SocialIcon
        title='Continue With Facebook'
        button
        type='facebook'
        onPress={this.onFBLoginPress.bind(this)}
        fontStyle={styles.titleStyle}
      />
      </View>

      <View style={{ margin: 7}}>
        <Button
        title="Sign In"
        titleStyle={styles.titleStyle}
        buttonStyle={styles.buttonStyle}
      />
      </View>

      <View style={{ margin: 7}}>
        <Button
        title="Sign Up"
        titleStyle={styles.titleStyle}
        buttonStyle={styles.buttonStyle}
      />
      </View>

      <View style={styles.bottomstyle}>
            <Text style={styles.termText}> By Signing Up or Sign In you agree with our
              <Text>  </Text>
              {'\n'}
              <Text style={{ textDecorationLine:'underline' }}>Terms And Conditions</Text>
            </Text>
      </View>

    </View>
  );
}
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  titleStyle: { 
    fontSize: 15,
    fontWeight: 'bold',
  },
  buttonStyle: {
    backgroundColor: "rgba(255,0,0,0.5)",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 24 * 2 + 2,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 30,
    paddingTop: 14,
    paddingBottom: 14
  },
  containerStyle: {
    marginTop: 10,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor:'white'
  },
  buttoncontainerStyle: {
    //margin: 7,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginTop: 10,
    //paddingLeft: 1,
    //paddingRight: 1,
    },
    termText: {
      fontSize: 12,
      color:'#82837E',
      alignItems: 'center',
      marginLeft: 10,
      textAlign: 'center'
    },
    terms: {
      padding: 10,
      flexDirection: 'row',
      justifyContent:'flex-end',
      position: 'absolute'
    },
    bottomstyle: {
      alignSelf: 'center',
      justifyContent:'flex-end',
      position: 'absolute',
      bottom: 10
    }
}

const titleAD = (
  <Text style={{
    justifyContent:'center',
    alignSelf:'center',
    color:'red',
    fontSize:35
    }}>
      Prop
  <Text style={{ 
    textDecorationLine:'underline', 
    color:'red'
    }}>
      er
  </Text>
  ty
  <Text> </Text>
<Text style={{ 
    fontWeight:'bold', 
    color:'red'
    }}>
      CRM
  </Text>

  </Text>
  
)

const titleSub = (
  <Text style={{
    justifyContent:'center',
    alignSelf:'center',
    color:'rgba(192,192,192,1)',
    fontSize:25
    }}>
      Manage your property sales with ease
  </Text>
  
)


export default LoginFormMain;
