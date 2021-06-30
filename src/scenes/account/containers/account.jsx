import React from 'react';
import { View } from 'react-native';

import Profile from '../components/profile';
import OptionsAccount from '../components/options_account';

function Account() {
  return (
    <View>
      <Profile />
      <OptionsAccount />
    </View>
  );
}

export default Account;
