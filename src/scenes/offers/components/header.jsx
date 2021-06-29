import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

import repartidor from '../../../../assets/repartidor.png';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    top: '10%',
    marginHorizontal: 20,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 26,
    marginBottom: 12,
    fontWeight: 'bold',
  },
  description: {
    color: '#FFFFFF',
    fontSize: 14,
    marginBottom: 2,
  },
  amoungRestaurant: {
    marginTop: 12,
    backgroundColor: '#FFFFFF',
    width: 150,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  amoungRestaurantText: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  deliveryImage: {
    position: 'absolute',
    height: 150,
    width: 150,
    right: 50,
  },
});

function Offers() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Latest Offers</Text>
      <Text style={styles.description}>Find discount, offers</Text>
      <Text style={styles.description}>special meals and more!</Text>
      <View style={styles.amoungRestaurant}>
        <Text style={styles.amoungRestaurantText}>
          20 Restaurants
        </Text>
      </View>
      <Image style={styles.deliveryImage} source={repartidor} />
    </View>
  );
}

export default Offers;
