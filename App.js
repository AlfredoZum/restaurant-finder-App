// import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import store from './src/store/store';
import { Provider } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import configureStore from './src/store/store';

// eslint-disable-next-line import/no-unresolved
import HomeTabs from './src/components/home-tabs';

const store = configureStore();

const Stack = createStackNavigator();

export default function App() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Delivery App" component={HomeTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}