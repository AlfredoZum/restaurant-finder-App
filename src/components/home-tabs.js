import * as React from 'react';
import {StyleSheet} from 'react-native';
import {selected_tab} from '../store/actions/homeTabBar.action';
import {connect} from 'react-redux';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { BottomNavigation, Text } from 'react-native-paper';

import Home from '../scenes/home/containers/home';

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const Tab = createMaterialBottomTabNavigator();

function HomeTabs( props ) {

  _handleIndexChange = index => {
    props.tab.index = index;
    props.selected_tab(index);
  }

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
    backgroundColor: 'white'
  },
});

const mapStateToProps = state => {
  return {tab: state.homeTab}
}

const mapDispatchToProps = dispatch => {
  return {
      selected_tab : (index) => {
          console.log( index, 'indexxx' )
          return dispatch(selected_tab(index));
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeTabs);