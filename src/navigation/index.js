import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainStack} from './MainStack';

export const NavContainer = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};
