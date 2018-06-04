import React, {Component} from 'react';
import { View, Image, Text } from 'react-native';
import { Icon , Header , SearchBar } from 'react-native-elements';

class HeaderWithIcon extends Component {

  constructor(props) {
    super(props);
  }

    render() {

    return (
        <Header
        backgroundColor = 'rgba(0,0,255,0.1)'
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{topSearchBar}}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
    );
  }
};

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

export default HeaderWithIcon;