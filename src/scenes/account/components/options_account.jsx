import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: 12,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
  },
  optionDiv: {
    width: '100%',
    height: 60,
    borderBottomColor: '#dad7da',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

function OptionsAccount() {
  const options = [
    { name: 'Profile' },
    { name: 'Payment Method' },
    { name: 'Order History' },
    { name: 'Delivery Address' },
    { name: 'Settings' },
    { name: 'About Us' },
    { name: 'Support Center' },
  ];

  const indexText = (index) => index;

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} showsHorizontalScrollIndicator={false}>
        {options.map((option, index) => (
          <Option key={indexText(index)} item={option} />
        ))}
      </ScrollView>
    </View>
  );
}

function Option(prop) {
  const { item } = prop;

  return (
    <View style={styles.optionDiv}>
      <Text>{item.name}</Text>
      <AntDesign name="right" size={18} color="black" />
    </View>
  );
}

export default OptionsAccount;
