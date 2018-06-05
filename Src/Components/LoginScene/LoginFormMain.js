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
  Actions.main({type : 'reset'});
}

render() {
  return(
    <Card style={{backgroundColor:'white'}}>
      
      <Tile
        imageSrc={require('../images/open-house-logo.jpg')}
      >
      </Tile>

      <SocialIcon
        title='Sign In With Facebook'
        button
        type='facebook'
        onPress={this.onFBLoginPress.bind(this)}
        fontStyle={styles.titleStyle}
      />
      <Button
        title="Sign In"
        titleStyle={styles.titleStyle}
        buttonStyle={styles.buttonStyle}
        containerStyle={styles.buttoncontainerStyle}
      />

      <View style={styles.bottomstyle}>
            <Text style={styles.termText}> I have read and agree to the
              <Text>  </Text>
              <Text style={{ textDecorationLine:'underline' }}>Terms of Service</Text>
              <Text>  </Text>
              &
              <Text>  </Text>
              <Text style={{ textDecorationLine:'underline' }}>Privacy Policy.</Text>
            </Text>
      </View>

    </Card>
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
    //backgroundColor: "rgba(92, 99,216, 1)",
    backgroundColor: "rgba(255,0,0,0.5)",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    //width:1000,
    height: 24 * 2 + 2,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 30,
    paddingTop: 14,
    paddingBottom: 14
  },
  buttoncontainerStyle: {
    margin: 7,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginTop: 20,
    paddingTop: 10,
    //paddingLeft: 1,
    //paddingRight: 1,
    },
    termText: {
      fontSize: 12,
      color:'#82837E',
      marginLeft: 10
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
      bottom: 0
    }
}


const topSearchBar = (
  <SearchBar
  //lightTheme
  //onChangeText={someMethod}
  //onClearText={someMethod}
  clearIcon={{ color: 'red' }}
  //searchIcon={false}
  size={50}
  icon={{ type: 'font-awesome', name: 'search' }}
  placeholder='Type Here...' 
  containerStyle={{alignSelf:'stretch', backgroundColor: 'rgba(0,0,255,0.1)' , opacity: 0.7}}
  round={true}
  underlineColorAndroid='light-blue'
  />
  
)


export default LoginFormMain;
