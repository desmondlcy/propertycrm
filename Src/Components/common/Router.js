import React from 'react';
import {
  Scene ,
  Router ,
  Actions,
  Drawer,
  Stack
} from 'react-native-router-flux';
import LoginForm from './Components/LoginScene/LoginForm';
import CountryList from './Components/CountryList'
import CountryDetailView from './Components/CountryDetailView'
import CountryEdit from './Components/CountryEdit'
import CountryCreate from './Components/CountryCreate'
import DrawerContent from './Components/DrawerContent'
import MenuIcon from './Components/images/menuIcon.png'

const RouterComponent = () => {
return(

    <Router sceneStyle={styles.scenes}>
      <Scene key='root' hideNavBar>
        <Scene key='auth'>
          <Scene key='login' component={LoginForm} title='Welcome'/>
        </Scene>
        <Scene key='main'>
        <Drawer
          //hideNavBar
          key="drawer"
          contentComponent={DrawerContent}
          drawerImage={MenuIcon}
          drawerWidth={300}
        >
              <Scene
                key="countryList"
                rightTitle= "Add"
                onRight= {() => Actions.countryCreate()}
                component={CountryList}
                title="Countries List"
                initial
              />
              <Scene
                key="countryedit"
                component={CountryEdit}
                title="Country Detail (Edit)"
              />
              <Scene
                key="countryCreate"
                component={CountryCreate}
                title="Create Country"
              />
        </Drawer>
        </Scene>
      </Scene>
    </Router>
);
};

const styles = {
  scenes: {
    flex:1,
    backgroundColor: '#fff',
  }
}

export default RouterComponent;
