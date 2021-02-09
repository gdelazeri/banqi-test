import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Constants from 'expo-constants';

import Home from '../screens/Home';
import Dashboard from '../screens/Dashboard';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      headerMode="none"
      initialRouteName={'Home'}
      screenOptions={{
        cardStyle: { marginTop: Constants.statusBarHeight }
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
};

export default AppStack;
