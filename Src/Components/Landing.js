import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Icon , Button , List, ListItem , Overlay , SearchBar } from 'react-native-elements';
import {
  ListView ,
  View ,
  Text
}  from 'react-native';
import {
  Card,
  CardSection,
  Information
}  from './common';

class Landing extends Component {

  state = { popMessage: false , overlayVisible: true };

  onButtonPress() {
    console.log//Actions.countryList();
  }


    render (){
      return (
          <View style={{flex: 1, flexDirection: 'row' , justifyContent: 'flex-start'}}>
          <View style={{margin: 7 , flex: 1,width:50, flexDirection: 'row' , justifyContent: 'flex-end'}}>
            {leftIcon}
            </View>
            <View style={{margin: 7 , flex: 1, flexDirection: 'column' ,alignSelf:'stretch', justifyContent: 'flex-start'}}>
            {topSearchBar}
            </View>
            <View style={{margin: 7 , flex: 1, flexDirection: 'row' , justifyContent: 'flex-end'}}>
            {rightIcon}
            </View>
         </View>
    );
  }
}
const testIcon = (
  <Icon
    size={30}
    name='rowing'
    />
);

const list = [
  {
    title: 'Country List',
    icon: 'touch-app'
  }
  // to add more list item here
]

const rightIcon = (
  <Icon
    name= 'home'
    color= 'red'
    onPress={ () => Actions.auth({type : 'reset'})}
  />
)

const leftIcon = (
  <View style={{flex: 1, flexDirection: 'row' , justifyContent: 'flex-start'}}>
  <Icon
    name= 'menu'
    color= 'red'
    onPress={ () => Actions.drawerOpen()}
  />
  </View>
)

  const topSearchBar = (
    <SearchBar
    clearIcon={{ color: 'red' }}
    size={50}
    icon={{ type: 'font-awesome', name: 'search' }}
    placeholder='Type Here...' 
    round={true}
    underlineColorAndroid='light-blue'
    />
  )

const styles = {
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
   // justifyContent: 'space-evenly'
  },
  searchbarStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  searchbarConStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch'
  }
}

export default Landing;
//export default connect(mapStateToProps, { loginUserSuccess , loginUserSuccessToken , retrieveUtipayCountries }) (Landing);
