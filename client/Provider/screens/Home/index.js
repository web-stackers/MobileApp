import React, {useEffect, useState} from 'react';
import { View, Image } from 'react-native';
import axios from 'axios';
import { Text } from 'react-native-paper';

import styles from './styles';

// Home screen
const HomeScreen = () => {
  const completeJobs = async () => {
    await axios
      .get('http://10.0.2.2:5000/jobAssignment/state/completeJobs/consumer/62132c85c4afd22e5fc49685')
      /*.then(response => {
        setJob(response.data);
      })*/
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    completeJobs();
  }, []);

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