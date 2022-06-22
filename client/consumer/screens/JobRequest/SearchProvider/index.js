/* eslint-disable prettier/prettier */

import React from 'react';
import {SafeAreaView, View, FlatList, Text, Alert} from 'react-native';

import axios from 'axios';

import Sheader from '../../../../components/Sheader';
import Sbutton from '../../../../components/Sbutton';
import styles from './styles';

const SearchProvider = ({navigation, route}) => {
  const {jobType, description, requestedTime, providersList, lat, longi, CID} =
    route.params;

  const lat1 = lat / 57.29577951;
  const longi1 = longi / 57.29577951;

  const AlertRequest = (id, providerLat, providerLongi) => {
    let lat2 = providerLat / 57.29577951;
    let longi2 = providerLongi / 57.29577951;
    let distance =
      3963.0 *
      Math.acos(
        Math.sin(lat1) * Math.sin(lat2) +
          Math.cos(lat1) * Math.cos(lat2) * Math.cos(longi2 - longi1),
      );
    console.log(
      'Distance between two places.................................................',
    );
    console.log(distance);
    if (distance < 15) {
      axios
        .get(`http://10.0.2.2:5000/job/availability/${requestedTime}/${id}`)
        .then(response => {
          console.log(
            'Check whether provider availability is checked..............................................................',
          );
          console.log(response.data);
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
                    console.log('provider Id');
                    console.log(id);

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
                        console.log(response.data);
                        console.log(response.data._id);
                        axios
                          .post('http://10.0.2.2:5000/jobAssignment', {
                            jobId: response.data._id,
                            providerId: id,
                          })
                          .then(function (response) {
                            console.log(response.data);
                            // navigation.navigate('PhotoUpload', {
                            //   jobId: response.data.jobId,
                            // });
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
                  onPress: () => navigation.pop(1),
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

  const handleView = (
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
  ) => {
    console.log('Dob');
    console.log(dob);
    // axios
    //   .get(`http://10.0.2.2:5000/provider/pic/${id}`)
    //   .then(response => {
    //     console.log(
    //       'Document list......................................................................................................',
    //     );

    navigation.navigate('ProviderJobProfile', {
      jobType: jobType,
      description: description,
      requestedTime: requestedTime,
      lat: lat,
      longi: longi,
      CID: CID,
      id: id,
      fname: fname,
      lname: lname,
      rating: rating,
      qualification: qualification,
      workYear: workYear,
      dob: dob,
      ratingCount: ratingCount,
      providerLat: providerLat,
      providerLongi: providerLongi,
      // profilePicture: response.data.doc,
    });
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  };

  const Item = ({
    fname,
    lname,
    rating,
    qualification,
    id,
    workYear,
    dob,
    ratingCount,
    providerLat,
    providerLongi,
  }) => (
    <View style={styles.item}>
      <Text style={styles.title}>
        {fname} {lname}
      </Text>
      <Text style={styles.subtitle}>Qualification: {qualification}</Text>
      <Text style={styles.subtitle}>
        Rating: {rating ? rating : 'No ratings yet'}
      </Text>

      <View style={styles.btngrp}>
        <Sbutton
          primary={true}
          text="Send Request"
          onPress={() => AlertRequest(id, providerLat, providerLongi)}
        />
        <Sbutton
          text="View Profile"
          onPress={() =>
            handleView(
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
            )
          }
        />
      </View>
    </View>
  );

  const renderItem = ({item}) => (
    <Item
      fname={item.name.fName}
      lname={item.name.lName}
      rating={item.totalRating / item.ratingCount}
      qualification={item.qualification}
      id={item._id}
      workYear={item.workStartedYear}
      dob={item.DOB}
      ratingCount={item.ratingCount}
      providerLat={item.address.latitude}
      providerLongi={item.address.longitude}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Sheader title="Choose one provider" />
      <FlatList
        data={providersList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Sbutton
        text="Go Home"
        onPress={() => navigation.navigate('CategorySelector')}
      />
    </SafeAreaView>
  );
};

export default SearchProvider;
