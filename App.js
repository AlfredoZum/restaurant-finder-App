// import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import store from './src/store/store';
import { Provider } from 'react-redux';

import configureStore from './src/store/store';

import NavigationComponent from './src/components/navigation';

const store = configureStore();

export default function App() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <Provider store={store}>
      <NavigationComponent />
    </Provider>
  );
}
