import React from 'react';
import { View, Image } from 'react-native';
import { Text } from 'react-native-paper';

import styles from './styles';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../../assets/images/logo.png')}
      />
    </View>
  );
};

export default HomeScreen;