import React from 'react';
import { View, StyleSheet } from 'react-native';
import { primaryColor } from '../../../utils/colors';

import Header from '../components/header';
import ListRestaurant from '../components/list-restaurant';

import {
  restaurant1,
  restaurant2,
  restaurant3,
  restaurant4,
} from '../../../utils/imagesRestaurant';

const styles = StyleSheet.create({
  container: {
    backgroundColor: primaryColor,
    height: '100%',
    width: '100%',
  },
  header: {
    height: '100%',
    width: '100%',
  },
  body: {
    backgroundColor: '#FFFFFF',
    height: '70%',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 10,
  },
});

function Offers() {
  const restaurants = [
    {
      id: 1,
      name: 'Loba Restaurante',
      score: 4.7,
      ratings: 124,
      type: 'cocina y cerveza en la fábrica',
      price: '$$',
      banner: restaurant1,
      offers: 'free shipping',
    },
    {
      id: 2,
      name: 'Quelite',
      score: 4.7,
      ratings: 124,
      type: 'Mexicana, Contemporánea',
      price: '$$',
      banner: restaurant2,
      offers: 'free shipping',
    },
    {
      id: 3,
      name: 'Mononoke Ramen',
      score: 4.7,
      ratings: 124,
      type: 'Restaurante ramen',
      price: '$$',
      banner: restaurant3,
      offers: 'free shipping',
    },
    {
      id: 4,
      name: 'Caballo De Mar',
      score: 4.7,
      ratings: 124,
      type: 'Mariscos ',
      price: '$$',
      banner: restaurant4,
      offers: 'free shipping',
    },
  ];

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.body}>
        <ListRestaurant restaurants={restaurants} />
      </View>
    </View>
  );
}

export default Offers;
