import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Icon , Button , List, ListItem } from 'react-native-elements';
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

  state = { popMessage: false };

  onButtonPress() {
    console.log//Actions.countryList();
  }


    render (){
      return (
        <Card>
              {list.map((item, i) => (
                <ListItem
                  key={i}
                  title={item.title}
                  leftIcon={{name: item.icon}}
                  onPress= {this.onButtonPress.bind(this)}
                />
              ))}
        </Card>
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


export default Landing;
//export default connect(mapStateToProps, { loginUserSuccess , loginUserSuccessToken , retrieveUtipayCountries }) (Landing);
