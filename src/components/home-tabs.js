import * as React from 'react';
import {StyleSheet} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { BottomNavigation, Text } from 'react-native-paper';

import Home from '../scenes/home/containers/home';

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const Tab = createMaterialBottomTabNavigator();

function HomeTabs() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: 'home'},
    { key: 'albums', title: 'Albums', icon: 'home' },
    { key: 'recents', title: 'Recents', icon: 'account' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    albums: AlbumsRoute,
    recents: RecentsRoute,
  });

  return (
    <BottomNavigation
      barStyle={styles.bottomNavigation}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      //shifting={true}
    />
  );
}

const styles = StyleSheet.create({
  bottomNavigation: {
    backgroundColor: 'white'
  },
});

export default HomeTabs;