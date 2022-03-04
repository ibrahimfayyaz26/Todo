import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNav from './DrawerNav';

const Navigation = () => {
  return (
    <NavigationContainer>
      <DrawerNav />
    </NavigationContainer>
  );
};

export default Navigation;
