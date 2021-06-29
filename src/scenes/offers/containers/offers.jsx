import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { primaryColor } from '../../../utils/colors';

import Header from '../components/header';

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
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.body}>
        <Text>Que onda loco</Text>
      </View>
    </View>
  );
}

export default Offers;
