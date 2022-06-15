import React from 'react';
import {View, Text, Image, Alert, ScrollView} from 'react-native';

import styles from './styles';
import Sbutton from '../../../../components/Sbutton';

import axios from 'axios';

const ProviderJobProfile = ({navigation, route}) => {
  const {
    jobType,
    description,
    requestedTime,
    lat,
    longi,
    id,
    fname,
    lname,
    rating,
    qualification,
    workYear,
    dob,
    ratingCount,
  } = route.params;

  console.log(jobType);
  console.log(requestedTime);

  const GoBack = () => {
    navigation.pop(1);
  };

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
                providerId: id,
              })
              .then(function (response) {
                console.log(response.data);
                console.log(response.data._id);
                axios
                  .post('http://10.0.2.2:5000/jobAssignment', {
                    jobId: response.data._id,
                    providerId: id,
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
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>
          {fname} {lname}
        </Text>
        <Image
          style={styles.image}
          source={require('../../../../assets/images/profile.jpg')}
        />
      </View>
      <View>
        <Text style={styles.subtitle}>
          Date of Birth: {dob.substring(0, 10)}
        </Text>
        <Text style={styles.subtitle}>
          Work Started Year: {workYear.substring(0, 4)}
        </Text>
        <Text style={styles.subtitle}>Qualification: {qualification}</Text>
        <Text style={styles.subtitle}>
          Rating: {rating ? rating : 'No ratings yet'}
        </Text>
        <Text style={styles.subtitle}>Rating Count: {ratingCount}</Text>
      </View>

      <View style={styles.btngrp}>
        <Sbutton primary={true} text="Send Request" onPress={AlertRequest} />
        <Sbutton text="Go Back" onPress={GoBack} />
      </View>
    </ScrollView>
  );
};

export default ProviderJobProfile;
