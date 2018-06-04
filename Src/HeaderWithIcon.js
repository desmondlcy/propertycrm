import React, {Component} from 'react';
import { View, Image, Text } from 'react-native';
import { Icon , Header , SearchBar } from 'react-native-elements';
import { Drawer } from 'react-native-router-flux';
import { Actions } from 'react-native-router-flux';

class HeaderWithIcon extends Component {

  constructor(props) {
    super(props);
  }

    render() {

    return (
        <Header
        statusBarProps={{ barStyle: 'light-content' }}
        //backgroundColor = 'rgba(0,0,255,0.1)'
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{topSearchBar}}
        rightComponent={rightIcon}
      />
    );
  }
};

const rightIcon = (
  <Icon
    name= 'home'
    color= '#fff'
    onPress={ () => Actions.auth({type : 'reset'})}
  />
)

const leftIcon = (
  <Icon
    name= 'menu'
    color= '#fff'
    onPress={ () => Actions.auth({type : 'reset'})}
  />
)

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
    //containerStyle={{alignSelf:'stretch', backgroundColor: 'rgba(0,0,255,0.1)' , opacity: 0.7}}
    round={true}
    underlineColorAndroid='light-blue'
    />
    
  )



export default HeaderWithIcon;