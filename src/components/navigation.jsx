// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { connect } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import selectedTab from '../store/actions/homeTabBar.action';

// eslint-disable-next-line import/no-unresolved
// import HomeTabs from './src/components/home-tabs';
import HomeTabs from './home-tabs';

const Stack = createStackNavigator();

function NavigationComponent(props) {
  const prop = props;
  const headerShown = prop.tab.index !== 1;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Delivery App 1" component={HomeTabs} options={{ headerShown }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const mapStateToProps = (state) => ({ tab: state.homeTab });

const mapDispatchToProps = (dispatch) => ({
  selectedTab: (index) => dispatch(selectedTab(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationComponent);
