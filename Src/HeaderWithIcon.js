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
        <Header style={styles.containerStyle}
        statusBarProps={{ barStyle: 'light-content' }}
        leftComponent={leftIcon}
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
    onPress={ () => Actions.drawerOpen()}
  />
)

  const topSearchBar = (
    <View style={{backgroundColor: '#fff' , flexDirection: 'row',justifyContent: 'center',alignItems: 'stretch'}}> 
    <SearchBar
    clearIcon={{ color: 'red' }}
    size={50}
    icon={{ type: 'font-awesome', name: 'search' }}
    placeholder='Type Here...' 
    containerStyle={{alignSelf:'stretch', backgroundColor: 'rgba(0,0,255,0.1)' , opacity: 0.7}}
    round={true}
    underlineColorAndroid='light-blue'
    />
    </View>
  )

const styles = {
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  searchbarStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch'
  }
}


export default HeaderWithIcon;