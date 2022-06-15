/* eslint-disable prettier/prettier */

import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, FlatList, Text, Alert, Image} from 'react-native';

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

  const Item = ({fname, lname, rating, qualification}) => (
    <View style={styles.item}>
      <Text style={styles.title}>
        {fname} {lname}
      </Text>
      <Text style={styles.subtitle}>Qualification: {qualification}</Text>
      <Text style={styles.subtitle}>
        Rating: {rating ? rating : 'No ratings yet'}
      </Text>

      <View style={styles.btngrp}>
        <Sbutton primary={true} text="Send Request" onPress={AlertRequest} />
        <Sbutton text="View Profile" onPress={handleView} />
      </View>
    </View>
  );

  const renderItem = ({item}) => (
    <Item
      fname={item.name.fName}
      lname={item.name.lName}
      rating={item.totalRating / item.ratingCount}
      qualification={item.qualification}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Sheader title="Choose one provider"></Sheader>
      <FlatList
        data={providersList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default SearchProvider;
