import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';
// import { black } from 'react-native-paper/lib/typescript/styles/colors';

import { Entypo } from '@expo/vector-icons';
import { primaryColor, grayColor } from '../../../utils/colors';

const styles = StyleSheet.create({
  scrollView: {
    marginBottom: 275,
    marginTop: 8,
  },
  restaurantContainer: {
    marginLeft: 16.0,
    marginRight: 16.0,
    marginTop: 16.0,
  },
  restaurantBanner: {
    width: '100%',
    height: 200.0,
  },
  containerInfo: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  nameRestaurant: {
    // marginLeft: 8.0,
    // marginRight: 8.0,
    marginTop: 8.0,
    marginBottom: 8.0,
    fontWeight: 'bold',
    fontSize: 16,
  },
  scoreRestaurant: {
    color: primaryColor,
    fontSize: 12,
    marginRight: 4,
  },
  textGeneralRestaurant: {
    fontSize: 12,
    color: grayColor,
    marginRight: 4,
    fontWeight: '500',
  },
  textpriceRestaurant: {
    fontSize: 14,
    color: grayColor,
    marginLeft: 4,
    fontWeight: '500',
  },
});

function ListRestaurant(props) {
  const prop = props;
  const { restaurants } = prop;

  const indexText = (index) => index;

  return (
    <ScrollView style={styles.scrollView} showsHorizontalScrollIndicator={false}>
      {restaurants.map((restaurant, index) => (
        <Restaurant key={indexText(index)} restaurant={restaurant} />
      ))}
    </ScrollView>
  );
}

function Restaurant(props) {
  const prop = props;
  const { restaurant } = prop;

  const ratings = `(${restaurant.ratings} ratings)`;
  const price = `· ${restaurant.price}`;

  return (
    <View style={styles.restaurantContainer}>
      <View style={styles.restaurantContainerImage}>
        <Image style={styles.restaurantBanner} source={restaurant.banner} />
      </View>
      <Text style={styles.nameRestaurant}>{restaurant.name}</Text>
      <View style={styles.containerInfo}>
        <Entypo
          style={styles.iconStart}
          name="star"
          size={16}
          color={primaryColor}
        />
        <Text style={styles.scoreRestaurant}>{restaurant.score}</Text>
        <Text style={styles.textGeneralRestaurant}>{ratings}</Text>
        <Text style={styles.textGeneralRestaurant}>{restaurant.type}</Text>
        <Text style={styles.textpriceRestaurant}>{price}</Text>
      </View>
    </View>
  );
}

export default ListRestaurant;
