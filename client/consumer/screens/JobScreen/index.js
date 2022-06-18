import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';

import styles from './styles';

const JobScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>
        We are sorry to inform you that, on your specific job type, no service
        providers are available near your area. Soon, we will try to provide the
        service in your area.
      </Text>
    </View>
  );
};

export default JobScreen;
