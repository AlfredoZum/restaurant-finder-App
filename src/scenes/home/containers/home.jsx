import React from 'react';
import { View } from 'react-native';

import SearchHeader from '../components/search-header';
import Categories from '../components/categories';
import ListRestaurant from '../components/list-restaurant';

import {
  avocado,
  hamburger,
  ice,
  Shrimp,
  pizza,
  coffee,
} from '../../../utils/imagesCategory';

import {
  restaurant1,
  restaurant2,
  restaurant3,
  restaurant4,
} from '../../../utils/imagesRestaurant';

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

  const restaurants = [
    {
      id: 1,
      name: 'Loba Restaurante',
      score: 4.7,
      ratings: 124,
      type: 'cocina y cerveza en la fábrica',
      price: '$$',
      banner: restaurant1,
    },
    {
      id: 2,
      name: 'Quelite',
      score: 4.7,
      ratings: 124,
      type: 'Mexicana, Contemporánea',
      price: '$$',
      banner: restaurant2,
    },
    {
      id: 3,
      name: 'Mononoke Ramen',
      score: 4.7,
      ratings: 124,
      type: 'Restaurante ramen',
      price: '$$',
      banner: restaurant3,
    },
    {
      id: 4,
      name: 'Caballo De Mar',
      score: 4.7,
      ratings: 124,
      type: 'Mariscos ',
      price: '$$',
      banner: restaurant4,
    },
  ];

  return (
    <View>
      <SearchHeader />
      <Categories categories={categories} />
      <ListRestaurant restaurants={restaurants} />
    </View>
  );
}

export default Home;
