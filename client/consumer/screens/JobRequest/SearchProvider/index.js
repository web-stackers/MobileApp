/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text, Image, Alert} from 'react-native';

import styles from './styles';
import Sbutton from '../../../../components/Sbutton';
import ScheckBox from '../../../../components/ScheckBox';
import Sheader from '../../../../components/Sheader';

import axios from 'axios';

const SearchProvider = ({navigation, route}) => {
  const {jobType, description, requestedTime, providersList, lat, longi} =
    route.params;
  console.log(jobType);
  console.log(requestedTime);
  console.log(providersList);
  console.log(providersList.length);
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
          onPress: () => {
            axios
              .post('http://10.0.2.2:5000/job', {
                jobType: jobType,
                description: description,
                requestedTime: requestedTime,
                longitude: longi,
                latitude: lat,
              })
              .then(function (response) {
                console.log(response.data);
                console.log(response.data._id);
                axios
                  .post('http://10.0.2.2:5000/jobAssignment', {
                    jobId: response.data._id,
                  })
                  .then(function (response) {
                    console.log(response.data);
                    navigation.navigate('JobAcknowledge');
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
              })
              .catch(function (error) {
                console.log(error);
              });
          },
        },
      ],
    );

  const handleView = () => {
    navigation.navigate('NoProviders');
  };

  return (
    <ScrollView style={styles.container}>
      <Sheader title="Choose one provider"></Sheader>

      <View style={styles.btngrp}>
        <Sbutton primary={true} text="Send Request" onPress={AlertRequest} />
        <Sbutton text="View Profile" onPress={handleView} />
      </View>
    </ScrollView>
  );
};

export default SearchProvider;