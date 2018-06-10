import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View , TouchableOpacity} from 'react-native';
import { CardSection } from './common/CardSection';
import { Icon , Button  , SearchBar , Avatar } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'
import { back } from 'react-native/Libraries/Animated/src/Easing';
class ModalWelcome extends Component {
  state = {
    modalVisible: true,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <Modal
      visible={true}
      transparent
      animationType='slide'
      onRequestClose={() => {}}
      >
      <View style={{backgroundColor: 'rgba(0,0,0,0.7)',flex: 1, flexDirection: 'row' , justifyContent: 'flex-start'}}>
          <View style={{flex: 1, flexDirection: 'row' , justifyContent: 'flex-start'}}>
              <Avatar 
              size="xlarge"
              icon={{name: 'person'}}
              rounded
              onPress={() => console.log("Avatar")}
              activeOpacity={0.7}
              containerStyle={{margin: 7, marginTop: 35}}
            />
          </View>
          <View style={{flex: 1, flexDirection: 'row' , justifyContent: 'flex-end'}}>
            <Icon
                containerStyle={{margin: 7, marginTop:25}}
                name='close'
                size={50}
                color='white'
                backgroundColor='rgba(0,0,0,0.7)'
                onPress={() => Actions.main({type: 'reset'})} />
          </View>
      </View>

  
      <View style={styles.containerStyle} >
        <Text style = {styles.textStyle}> Help </Text>
      </View>

      <View style={{alignSelf:'center', justifyContent:'center' , height: 50}}>
        <TouchableOpacity onPress={() => Actions.main({type: 'reset'})} >
        <Text style={{ color: 'red', fontSize: 30}}> Home </Text>
        </TouchableOpacity>
      </View>

    </Modal>
    );
  }
}

const styles = {
  cardstyle:{
    justifyContent: 'center'
  },
  textStyle:{
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40

  },
  containerStyle:{
    backgroundColor: 'rgba(0,0,0,0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  },
  bottomstyle: {
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 10
  },
  textStyle: {
    color: 'white',
    fontSize: 30
  }
};


export default ModalWelcome;
