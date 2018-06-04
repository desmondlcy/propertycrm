import React from 'react';
import {
  Scene ,
  Router ,
  Actions,
  Drawer,
  Stack,
  renderLeftButton
} from 'react-native-router-flux';
import { View } from 'react-native';
import LoginForm from './Components/LoginScene/LoginForm';
import DrawerContent from './Components/DrawerContent';
import MenuIcon from './Components/images/menuIcon.png';
import MenuIcon50 from './Components/images/menuIcon50.png';
import { Icon , Header , SearchBar } from 'react-native-elements';
import Landing from './Components/Landing';
import HeaderWithIcon from './HeaderWithIcon';
const RouterComponent = () => {
return(

    <Router sceneStyle={styles.scenes} >
     <Drawer
          //hideNavBar
          key="drawer"
          contentComponent={DrawerContent}
          drawerImage={MenuIcon50}
          drawerWidth={200}
          drawerPosition='left'
          drawerBackgroundColor='white'
        >
      <Scene key='root' navBar = {HeaderWithIcon} >
      
        <Scene key='auth'>
          <Scene 
              key='login' 
              component={LoginForm} 
              title='Welcome'
              hideNavBar
          />
        </Scene>
        
        <Scene key='main'>
        <Drawer
          hideNavBar
          key="drawer"
          contentComponent={DrawerContent}
          drawerImage={MenuIcon50}
          drawerWidth={200}
          drawerPosition='left'
          drawerBackgroundColor='white'
        >
        <Scene
            key="landing"
            component={Landing}
            title={homeIcon}
            initial
          />
        </Drawer>
        </Scene>
      </Scene>
      </Drawer>
    </Router>
);
};

const homeIcon = (
  <View>
  <Icon
  raised
  size={20}
  name='home'
  type='font-awesome'
  color='red'
  iconContainerStyle={{alignItems: 'center'}}
/>
</View>
)


const drawerIcon = (
  <Icon
  name='menu'
  type='font-awesome'
/>
)




const styles = {
  scenes: {
    flex:1,
    backgroundColor: '#fff',
  }
}


export default RouterComponent;
