
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Icon , Button , List, ListItem , Overlay , SocialIcon} from 'react-native-elements';
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

class Welcome extends Component {

  state = { popMessage: false , overlayVisible: true };

  onButtonPress() {
    console.log//Actions.countryList();
  }


    render (){
      return (
        <Card>

                 <Overlay 
                isVisible={this.state.overlayVisible}
                onBackdropPress={() => Actions.main({type: 'reset'})} 
                overlayBackgroundColor="rgba(0,0,0,0.7)"
                windowBackgroundColor="rgba(0,0,0,0.7)"
                width="auto"
                height="auto"
                >
                <Text> testing ! </Text>
                </Overlay>
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


export default Welcome;
//export default connect(mapStateToProps, { loginUserSuccess , loginUserSuccessToken , retrieveUtipayCountries }) (Landing);
