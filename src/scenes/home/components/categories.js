import React from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import { Feather, Foundation } from '@expo/vector-icons'; 
import { ColorLens, VerticalAlignCenter } from '@material-ui/icons';
import { pink } from '@material-ui/core/colors';

function Categories( props ){

    return (
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
        {
            props.categories.map( ( category, index ) => (
                <Category key={index} category={category} ></Category>
            ))
        }
      </ScrollView>
    );
}

function Category( props ){

    const { category } = props;
    
    //const image = uri( nameImage );

    return(
        <View>
            <View style={styles.categoryContainer} >
              <Image style={ styles.categoryImg } source={ category.icon } />
            </View>
            <Text style={styles.categoryName} >{ category.name }</Text>
        </View>
    );

}

const styles = StyleSheet.create({
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
        fontWeight: '500'
    },
});

export default Categories;