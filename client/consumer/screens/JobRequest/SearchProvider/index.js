/* eslint-disable prettier/prettier */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  Alert,
  Image,
  // StatusBar,
} from 'react-native';

import axios from 'axios';

import Sheader from '../../../../components/Sheader';
import Sbutton from '../../../../components/Sbutton';
import styles from './styles';

const SearchProvider = ({navigation, route}) => {
  const {jobType, description, requestedTime, providersList, lat, longi} =
    route.params;

  console.log(jobType);
  console.log(requestedTime);
  console.log(providersList);
  console.log(providersList.length);

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

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

  const Item = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>Qualification:</Text>
      <Text style={styles.subtitle}>Rating:</Text>

      <View style={styles.btngrp}>
        <Sbutton primary={true} text="Send Request" onPress={AlertRequest} />
        <Sbutton text="View Profile" onPress={handleView} />
      </View>
    </View>
  );

  const renderItem = ({item}) => <Item title={item.title} />;

  return (
    <SafeAreaView style={styles.container}>
      <Sheader title="Choose one provider"></Sheader>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default SearchProvider;
