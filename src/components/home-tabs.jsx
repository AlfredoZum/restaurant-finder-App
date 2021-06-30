import * as React from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { BottomNavigation } from 'react-native-paper';
import selectedTab from '../store/actions/homeTabBar.action';

import Home from '../scenes/home/containers/home';
import Offers from '../scenes/offers/containers/offers';
import Account from '../scenes/account/containers/account';

function HomeTabs(props) {
  const prop = props;
  const handleIndexChange = (index) => {
    prop.tab.index = index;
    prop.selectedTab(index);
  };

  // const [index, setIndex] = React.useState(0);
  // const [routes] = React.useState(props.tab.routes);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    offers: Offers,
    account: Account,
  });

  const styles = StyleSheet.create({
    bottomNavigation: {
      backgroundColor: 'white',
    },
  });

  const { index, routes } = prop.tab;

  return (
    <BottomNavigation
      keyboardHidesNavigationBar={false}
      barStyle={styles.bottomNavigation}
      navigationState={{ index, routes }}
      onIndexChange={handleIndexChange}
      renderScene={renderScene}
      // shifting={true}
    />
  );
}

const mapStateToProps = (state) => ({ tab: state.homeTab });

const mapDispatchToProps = (dispatch) => ({
  selectedTab: (index) => dispatch(selectedTab(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeTabs);
