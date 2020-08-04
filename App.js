import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeTabs from './src/components/home-tabs';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Delivery App" component={HomeTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}