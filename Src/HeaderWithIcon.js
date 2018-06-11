import React, {Component} from 'react';
import { View, Image ,Platform, Dimensions} from 'react-native';
//import { Icon , SearchBar } from 'react-native-elements';
import { Drawer } from 'react-native-router-flux';
import { Actions } from 'react-native-router-flux';
import { Left, Container, Header, Item, Input, Icon, Button, Text } from 'native-base';

const deviceHeight = Dimensions.get("window").height;  

class HeaderWithIcon extends Component {
  render() { 
    return (
        <Header searchBar rounded>
        
          <Button transparent iconRight onPress={ () => Actions.drawerOpen()}>
            <Icon name='menu' />
          </Button>
          
          <Item style={{width:50,flex:1,justifyContent:'center',alignItems:'flex-start'}}>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
          </Item>
          <Button transparent>
          <Icon ios='ios-notifications' android="md-notifications"/>
          </Button>
        </Header>
    );
  }
};

const styles = {
  theme: {
  flex: 1,
  flexDirection: 'column',
  justifyContent:'flex-start',
  //height: Platform.OS === "ios" ? deviceHeight : deviceHeight - 20
  }
};


export default HeaderWithIcon;