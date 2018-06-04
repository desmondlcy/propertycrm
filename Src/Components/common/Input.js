import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry , editable , keyboardType }) => {

  const { inputStyle, labelStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
        style={inputStyle}
        editable={editable}
        keyboardType={keyboardType}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 3,
  },
  labelStyle: {
    fontSize: 16,
    paddingLeft: 5,
    flex: 1
  },
  containerStyle: {
    height:40,
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center'

  }
};

export { Input };
