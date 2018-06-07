import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View} from 'react-native';
import { CardSection } from './common/CardSection';
import { Icon , Button } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'
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
      <View style={styles.containerStyle2}>
      <View style={{ paddingTop: 15}}>
        <Icon
        raised
        name='heartbeat'
        type='font-awesome'
        color='#f50'
        onPress={() => Actions.main({type: 'reset'})} />
      </View>
      </View>

      <View style = {styles.containerStyle} >
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
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  },
  containerStyle2: {
    height: 100,
    backgroundColor: 'rgba(0,0,0,0.75)',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    position: 'relative'
  }
};


export default ModalWelcome;
