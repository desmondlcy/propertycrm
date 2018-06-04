import React from 'react';
import { Modal, View, Text } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const Information = ( { children , visible }) => {
const {cardstyle , textStyle ,containerStyle }  = styles;
  return(
    <Modal
    visible={visible}
    transparent
    animationType='slide'
    onRequestClose={() => {}}
    >
      <View style = {mainConatinerStyle} >
        <CardSection style={cardstyle}>
          <Text style={textStyle}> {children} </Text>
        </CardSection>
      </View>
    </Modal>
  );

};

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
    mainConatinerStyle: {
        flexDirection: 'column',
        flex: 1
    },floatingMenuButtonStyle: {
        alignSelf: 'flex-start',
        position: 'absolute',
        bottom: 35
    },
    teststyle: {
        flexDirection: 'column',
        flex: 1,
        alignSelf: 'center',
        position: 'absolute',
        bottom: 0
    }
};

export { Information };
