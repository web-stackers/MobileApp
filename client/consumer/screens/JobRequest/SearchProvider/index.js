/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text, Image, Alert} from 'react-native';

import styles from './styles';
import Sbutton from '../../../../components/Sbutton';
import ScheckBox from '../../../../components/ScheckBox';
import Sheader from '../../../../components/Sheader';

import axios from 'axios';

const SearchProvider = ({navigation}) => {
  const AlertRequest = () =>
    Alert.alert(
      'Sending Request',
      'Are you sure to send the request for that provider?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => navigation.navigate('JobAcknowledge'),
        },
      ],
    );

  const handleView = () => {
    navigation.navigate('NoProviders');
    // axios
    //   .post('http://10.0.2.2:5000/job', {
    //     jobType,
    //     description,
    //     requestedTime,
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //     navigation.navigate('NoProviders');
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  };

  return (
    <ScrollView style={styles.container}>
      <Sheader title="Choose one provider"></Sheader>

      <View style={styles.btngrp}>
        <Sbutton primary={true} text="Send Request" onPress={AlertRequest} />
        <Sbutton
          text="View Profile"
          onPress={handleView}
          //   onPress={navigation.navigate('CategorySelector')}
        />
      </View>
    </ScrollView>
  );
};

export default SearchProvider;
