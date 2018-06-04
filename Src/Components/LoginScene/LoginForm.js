import React, { Component } from 'react';
import { Input, Card, CardSection , Button , Spinner }  from '../common';
import { Actions } from 'react-native-router-flux';
//import firebase from 'firebase';
import { connect } from 'react-redux';
import { Text , View , Image } from 'react-native';
//import SplashScreen from 'react-native-splash-screen'
import { emailChanged , passwordChanged, loginUser , loginUserToken } from '../../actions';
import { Tile , Overlay , Header , SearchBar , SocialIcon } from 'react-native-elements'


class LoginForm extends Component {

state = {overlayVisible: true};

componentDidMount(){
  //SplashScreen.hide();
}

onEmailChange(text){
    this.props.emailChanged(text);
};

onPasswordChange(text){
    this.props.passwordChanged(text);
};


onButtonPress () {
    const { email , password } = this.props;
    this.props.loginUser({ email,password });
};

renderButton() {
    if (this.props.loading){
        return <Spinner size="small" />
    };
    return (
    <Button onPress= {this.onButtonPress.bind(this)}>
    Log In
    </Button>
    );
};

onButtonPressToken () {
    const { email , password } = this.props;
    this.props.loginUserToken({ email,password });
};

renderButtonToken() {
    if (this.props.loading){
        return <CardSection> <Spinner size="small" /> </CardSection>
    };
    return (
      <CardSection>
      <Button onPress= {this.onButtonPressToken.bind(this)} props={styles.buttonStyle2}>
      Log In
      </Button>
      </CardSection>
    );
};


onLoginFail(){
    this.setState(
    {
    error:'Authentication Failed.',
    loading: false
    });
}

onLoginSuccess() {
this.setState(
  {
    email:'',
    password:'',
    error:'',
    loading: false
  });
};

renderError() {
  if(this.props.error){
    return(
      <View Style={{backgroundColor: 'white'}}>
        <Text style={styles.errorTextStyle}>
        {this.props.error}
        </Text>
      </View>
    );
  };
};

onFBLoginPress() {
  Actions.main({type : 'reset'});
}

render() {
  return(
    <Card style={{backgroundColor:'white'}}>
      <Tile
        //imageSrc={{ require: '../images/test.png' }}
        imageSrc={require('../images/test.png')}
//        title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolore exercitationem"
        featured
        caption="Some Caption Text"
      >
      </Tile>

      <SocialIcon
        title='Sign In With Facebook'
        button
        type='facebook'
        onPress={this.onFBLoginPress.bind(this)}
      />


      <Overlay 
      isVisible={this.state.overlayVisible}
      onBackdropPress={() => this.setState({overlayVisible: false})} 
      >
        <Text>Hello from Overlay!</Text>
      </Overlay>

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
  buttonStyle: {
    opacity: 0.7,
    flex: 1,
    alignSelf:'stretch',
    backgroundColor:'blue',
    borderRadius: 30,
    marginLeft: 100,
    marginRight: 100
  },
  buttonStyle2: {
    opacity: 0.7,
    flex: 1,
    alignSelf:'stretch',
    backgroundColor:'red',
    borderRadius: 30,
    marginLeft: 100,
    marginRight: 100
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



/*
const mapStateToProps  = state => {
  return {
      email: state.auth.email,
      password: state.auth.password,
      error: state.auth.error,
      loading: state.auth.loading,
      userToken: state.auth.userToken
    };
};*/

//export default connect(mapStateToProps, { emailChanged, passwordChanged , loginUser , loginUserToken }) (LoginForm);
export default LoginForm;
