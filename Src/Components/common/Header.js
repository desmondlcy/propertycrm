/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


// Import Libraries for making a component

import React from 'react';
import { View, Text } from 'react-native';

// Make a Component
const Header = (title) => (
  <View style={styles.viewStyle}>
  <Text style={styles.fontSize}> {title.headerText} </Text>
  </View>
);

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2
  },
  textStyle:
  {
    fontSize: 30
  }
};

// MAke component availabe for otehr parts of App
export { Header } ;
