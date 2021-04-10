import * as React from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { BottomNavigation, Text } from 'react-native-paper';
import selectedTab from '../store/actions/homeTabBar.action';

import Home from '../scenes/home/containers/home';

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const Tab = createMaterialBottomTabNavigator();

function HomeTabs(props) {
  _handleIndexChange = (index) => {
    props.tab.index = index;
    props.selectedTab(index);
  };

  //const [index, setIndex] = React.useState(0);
  //const [routes] = React.useState(props.tab.routes);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    offers: AlbumsRoute,
    account: RecentsRoute,
  });

  const index = props.tab.index;
  const routes = props.tab.routes;

  return (
    <BottomNavigation
      barStyle={styles.bottomNavigation}
      navigationState={{ index, routes }}
      onIndexChange={_handleIndexChange}
      renderScene={renderScene}
      //shifting={true}
    />
  );
}

const styles = StyleSheet.create({
  bottomNavigation: {
    backgroundColor: 'white',
  },
});

const mapStateToProps = (state) => {
  return { tab: state.homeTab };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectedTab: (index) => {
      console.log(index, 'indexxx');
      return dispatch(selectedTab(index));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeTabs);
