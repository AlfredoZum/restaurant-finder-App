import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
} from 'react-native';

import ProfileImg from '../../../../assets/profile.jpg';

const styles = StyleSheet.create({
  container: {
    paddingTop: 75,
    height: 200,
    padding: 12,
    backgroundColor: '#f9f9f9',
    flexDirection: 'row',
  },
  avatarImg: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
  infoCustomer: {
    marginTop: 26,
    marginLeft: 12,
  },
  nameProfile: {
    fontSize: 18,
    marginBottom: 6,
    fontWeight: 'bold',
  },
  emailProfile: {
    fontSize: 12,
    fontWeight: '300',
  },
});

function Profile() {
  return (
    <View style={styles.container}>
      <View>
        <Avatar />
      </View>
      <View style={styles.infoCustomer}>
        <Text style={styles.nameProfile}>Prueba Delivery</Text>
        <Text style={styles.emailProfile}>prueba.delivery@gmail.com</Text>
      </View>
    </View>
  );
}

function Avatar() {
  return (
    <Image style={styles.avatarImg} source={ProfileImg} />
  );
}

export default Profile;
