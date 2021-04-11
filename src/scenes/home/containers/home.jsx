import React from 'react';
import { View } from 'react-native';

import SearchHeader from '../components/search-header';
import Categories from '../components/categories';

import {
  avocado,
  hamburger,
  ice,
  Shrimp,
  pizza,
  coffee,
} from '../../../utils/imagesCategory';

function Home() {
  const categories = [
    {
      id: 1,
      name: 'Salad',
      icon: avocado,
    },
    {
      id: 2,
      name: 'Burgers',
      icon: hamburger,
    },
    {
      id: 3,
      name: 'Ice cream',
      icon: ice,
    },
    {
      id: 4,
      name: 'Asian',
      icon: Shrimp,
    },
    {
      id: 5,
      name: 'Pizza',
      icon: pizza,
    },
    {
      id: 3,
      name: 'Cofee',
      icon: coffee,
    },
  ];

  return (
    <View>
      <SearchHeader />
      <Categories categories={categories} />
    </View>
  );
}

export default Home;
