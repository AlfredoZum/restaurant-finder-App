import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather, Foundation } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    height: 55,
    alignSelf: 'stretch',
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
  searchContainer: {
    flex: 9,
    backgroundColor: '#EDEDED',
    borderRadius: 20,
    marginEnd: 10,
    borderColor: '#D5D5D5',
    borderWidth: 1,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    height: 40,
    marginHorizontal: 10,
  },
  iconSearch: {},
  filter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function SearchHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Feather
          style={styles.iconSearch}
          name="search"
          size={24}
          color="black"
        />
        <TextInput style={styles.input} placeholder="Search Here" />
      </View>
      <View style={styles.filter}>
        <Foundation name="filter" size={24} color="black" />
      </View>
    </View>
  );
}

export default SearchHeader;
