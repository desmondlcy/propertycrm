import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, props ,children }) => {
  const { buttonStyle, textStyle, buttonStyle2 } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={[buttonStyle2,props] }>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: 'white',
    //color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  },
  buttonStyle2: {
    opacity: 0.7,
    flex: 1,
    alignSelf:'stretch',
    backgroundColor:'#00008b',
    borderRadius: 30,
    // borderWidth: 1,
    // borderColor: '#007aff',
    marginLeft: 30,
    marginRight: 30
  },
};

export { Button };
