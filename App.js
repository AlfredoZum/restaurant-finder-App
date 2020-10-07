import { StatusBar } from 'expo-status-bar';
import React from 'react';
//import store from './src/store/store';
import { Provider } from 'react-redux';

import configureStore from './src/store/store';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeTabs from './src/components/home-tabs';

let store = configureStore()

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Delivery App" component={HomeTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}