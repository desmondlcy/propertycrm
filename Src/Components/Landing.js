import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {  Icon , Button , List, ListItem , Overlay , SearchBar } from 'react-native-elements';
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
        <View style={{flex:1,flexDirection:'column' , justifyContent:'flex-start'}} >
          <View style={{flex:1,flexDirection:'row' , justifyContent:'space-evenly' ,marginBottom:400, borderBottomWidth: 1, padding: 5, borderColor: '#ddd'}}>
            <View style={{
              marginBottom:400,
              borderBottomWidth: 1, 
              padding: 5, 
              borderColor: '#ddd'}}>
            <Icon
            raised
            size={25}
            name='home'
            type='font-awesome'
            color='#f50'
            onPress={() => console.log('hello')} />
            <Text style={{alignSelf:'center'}}> Condo </Text>
            </View>

            <View style={{
              marginBottom:400,
              borderBottomWidth: 1, 
              padding: 5, 
              borderColor: '#ddd'}}>
            <Icon
            raised
            size={25}
            name='laptop'
            type='font-awesome'
            color='#f50'
            onPress={() => console.log('hello')} />
            <Text style={{alignSelf:'center'}}> Shop Lots </Text>
            </View>

            <View style={{
              marginBottom:400,
              borderBottomWidth: 1, 
              padding: 5, 
              borderColor: '#ddd'}}>
              <Icon
              raised
              size={25}
              name='institution'
              type='font-awesome'
              color='#f50'
              onPress={() => console.log('hello')} />
              <Text style={{alignSelf:'center'}}> Service </Text>
            </View>

            <View style={{
              marginBottom:400,
              borderBottomWidth: 1, 
              padding: 5, 
              borderColor: '#ddd'}}>
              <Icon
              raised
              size={25}
              name='desktop'
              type='font-awesome'
              color='#f50'
              onPress={() => console.log('hello')} />
              <Text style={{alignSelf:'center'}}> Sty Semi D </Text>
            </View>

            <View style={{
              marginBottom:400,
              borderBottomWidth: 1, 
              padding: 5, 
              borderColor: '#ddd'}}>
              <Icon
              raised
              size={25}
              name='home'
              type='font-awesome'
              color='#f50'
              onPress={() => console.log('hello')} />
              <Text style={{alignSelf:'center'}}> Semi D </Text>
            </View>
        </View>
        
          <Card
            title='HELLO WORLD'
            image={require('./images/open-house-logoa.jpg')}>
            <Text style={{marginBottom: 10}}>
              The idea with React Native Elements is more about component structure than actual design.
            </Text>
            <Button
              icon={<Icon name='code' color='#ffffff' />}
              backgroundColor='#03A9F4'
              fontFamily='Lato'
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='VIEW NOW' />
          </Card>
          <Card
            title='HELLO WORLD'
            image={require('./images/open-house-logoa.jpg')}>
            <Text style={{marginBottom: 10}}>
              The idea with React Native Elements is more about component structure than actual design.
            </Text>
            <Button
              icon={<Icon name='code' color='#ffffff' />}
              backgroundColor='#03A9F4'
              fontFamily='Lato'
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='VIEW NOW' />
          </Card>
        
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
