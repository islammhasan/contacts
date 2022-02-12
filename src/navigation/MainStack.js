import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Login, Signup} from '../screens';

const Stack = createStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: true,
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Signup"
        component={Signup}
      />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
