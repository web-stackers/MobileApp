/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image, Alert, ScrollView} from 'react-native';
import {Buffer} from 'buffer';

import styles from './styles';
import Sbutton from '../../../../components/Sbutton';

import axios from 'axios';

const ProviderJobProfile = ({navigation, route}) => {
  const {
    // profilePicture,
    jobType,
    description,
    requestedTime,
    lat,
    longi,
    CID,
    id,
    fname,
    lname,
    rating,
    qualification,
    workYear,
    dob,
    ratingCount,
    providerLat,
    providerLongi,
  } = route.params;

  const lat1 = lat / 57.29577951;
  const longi1 = longi / 57.29577951;
  const lat2 = providerLat / 57.29577951;
  const longi2 = providerLongi / 57.29577951;

  const distance =
    3963.0 *
    Math.acos(
      Math.sin(lat1) * Math.sin(lat2) +
        Math.cos(lat1) * Math.cos(lat2) * Math.cos(longi2 - longi1),
    );
  console.log(
    'Distance between two places.................................................',
  );
  console.log(distance);
  const GoBack = () => {
    navigation.pop(1);
  };

  // let buffer = profilePicture.data;
  // let base64String = Buffer.from(profilePicture.data).toString('base64');
  // let mimetype = profilePicture.contentType;

  const AlertRequest = () => {
    if (distance < 15) {
      axios
        .get(`http://10.0.2.2:5000/job/availability/${requestedTime}/${id}`)
        .then(response => {
          if (!response.data) {
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
                        consumerId: CID,
                      })
                      .then(function (response) {
                        axios
                          .post('http://10.0.2.2:5000/jobAssignment', {
                            jobId: response.data._id,
                            providerId: id,
                          })
                          .then(function (response) {
                            navigation.navigate('JobAcknowledge');
                            // navigation.navigate('PhotoUpload', {
                            //   jobId: response.data.jobId,
                            // });
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
          } else {
            Alert.alert(
              'Provider not available',
              'We are sorry to inform that, your requested provider will not be available on your requested date. You can able to make schedule on another day',
              [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {
                  text: 'Request another date',
                  onPress: () => navigation.pop(2),
                },
              ],
            );
          }
        });
    } else {
      Alert.alert(
        'Sorry, your selected service provider is too far from your location',
      );
    }
  };

  const handleMap = () => {
    navigation.navigate('ProviderMap', {
      lat: providerLat,
      longi: providerLongi,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>
          {fname} {lname}
        </Text>
        <Image
          style={styles.image}
          // source={{
          //   uri: `data:${mimetype};
          //   base64,
          //    ${base64String}`,
          // }}

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
        <Sbutton text="View Provider Location" onPress={handleMap} />
        <Sbutton primary={true} text="Send Request" onPress={AlertRequest} />
        <Sbutton text="Go Back" onPress={GoBack} />
      </View>
    </ScrollView>
  );
};

export default ProviderJobProfile;
