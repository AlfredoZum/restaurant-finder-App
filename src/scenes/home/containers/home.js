import React from 'react';
import {View, Text} from 'react-native';

import SearchHeader from '../components/search-header';
import Categories from '../components/categories';

function Home() {

  const categories = [
    { id: 1, name: 'Salad', icon: require('../../../../assets/food_categories/025-avocado.png') },
    { id: 2, name: 'Burgers', icon: require('../../../../assets/food_categories/011-hamburger.png') },
    { id: 3, name: 'Ice cream', icon: require('../../../../assets/food_categories/014-ice.png') },
    { id: 4, name: 'Asian', icon: require('../../../../assets/food_categories/035-Shrimp.png') },
    { id: 5, name: 'Pizza', icon: require('../../../../assets/food_categories/031-pizza-slice.png') },
    { id: 3, name: 'Cofee', icon: require('../../../../assets/food_categories/036-coffee-cup.png') },
  ];

  return (
    <View>
      <SearchHeader></SearchHeader>
      <Categories categories={categories} />
    </View>
  );
}

export default Home;

// <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>