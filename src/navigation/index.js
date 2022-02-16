import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainStack} from './MainStack';
import {AuthStack} from './AuthStack';
import {useSelector} from 'react-redux';

export const NavContainer = () => {
  const authenticated = useSelector(state => state.main.authenticated);
  return (
    <NavigationContainer>
      {authenticated ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
