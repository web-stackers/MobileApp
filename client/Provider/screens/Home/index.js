import React, {useEffect, useState} from 'react';
import { useTheme } from 'react-native-paper';
import { View, Image } from 'react-native';
import axios from 'axios';
import { Text } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

const DetailField = ({detail, icon}) => {
  const { colors } = useTheme();

  return (
    <View style={styles.detailField}>
      <MaterialCommunityIcons 
        name={icon} 
        color='#fff'
        size={40} 
        style={styles.icon}
      />
      <View style={styles.detailView}>
        <Text style={styles.detail}>{detail}</Text>
      </View>
    </View>
  )
}

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

      <View>
        <DetailField 
          detail="Get jobs from customers who seek for your skills"
          icon="toolbox"
        />
        <DetailField 
          detail="Read the job details carefully and respond to a request"
          icon="file-document"
        />
        <DetailField 
          detail="Attend to committed job at requested time and finish it by the estimated time"
          icon="timer-sand"
        />
        <DetailField 
          detail="Unnecessary withdrawals and serious complaints from the customers may lead to blocking your account"
          icon="account-alert"
        />
      </View>
    </View>
  );
};

export default HomeScreen;