import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { primaryColor, grayColor } from '../../../utils/colors';

const styles = StyleSheet.create({
  container: {
    marginLeft: 12,
    backgroundColor: '#FFFFFF',
    marginTop: 4,
  },
  containerLocation: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  textLocation: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  textGeneral: {
    color: grayColor,
    fontSize: 12,
    fontWeight: '500',
  },
});

function LocationHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.textGeneral}>Delivering to</Text>
      <View style={styles.containerLocation}>
        <Text style={styles.textLocation}>Current location</Text>
        <MaterialIcons name="keyboard-arrow-down" size={28} color={primaryColor} />
      </View>
    </View>
  );
}

export default LocationHeader;
