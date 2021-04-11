import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
/* import { Feather, Foundation } from '@expo/vector-icons';
import { ColorLens, VerticalAlignCenter } from '@material-ui/icons';
import { pink } from '@material-ui/core/colors'; */

const styles = StyleSheet.create({
  container: {
    height: 130,
    backgroundColor: '#FFFFFF',
  },
  categoryContainer: {
    height: 70,
    width: 70,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: '#FFDAE0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryImg: {
    width: 45,
    height: 45,
  },
  categoryName: {
    marginHorizontal: 10,
    fontSize: 12,
    fontWeight: '500',
  },
});

const indexText = (index) => index;

function Categories(props) {
  const prop = props;
  return (
    <ScrollView style={styles.container} horizontal showsHorizontalScrollIndicator={false}>
      {prop.categories.map((category, index) => (
        <Category key={indexText(index)} category={category} />
      ))}
    </ScrollView>
  );
}

function Category(props) {
  const prop = props;
  const { category } = prop;

  // const image = uri( nameImage );

  return (
    <View>
      <View style={styles.categoryContainer}>
        <Image style={styles.categoryImg} source={category.icon} />
      </View>
      <Text style={styles.categoryName}>{category.name}</Text>
    </View>
  );
}

export default Categories;
