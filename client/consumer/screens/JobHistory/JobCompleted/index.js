/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */

import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, FlatList, Alert} from 'react-native';
import {Text} from 'react-native-paper';
import axios from 'axios';

import Sbutton from '../../../../components/Sbutton';
import styles from './styles';

const JobCompleted = ({navigation, route}) => {
<<<<<<< HEAD
  /* let CID = '62132b7bc4afd22e5fc49677';*/
  let CID = route.params.id;
=======
  const fetchJobs = () => {
        setJobs(response.data);
      });
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const Item = ({
    fname,
    lname,
    description,
    id,
    state,
    amount,
    time,
    requestedTime,
    jobType,
    JAID,
    complaint,
    ratingAndReview,
  }) => (
    <View style={styles.item}>
      <Text style={styles.title}>
        {fname} {lname}
      </Text>
      <Text style={styles.subtitle}>JobType: {jobType}</Text>
      <Text style={styles.subtitle}>Description: {description}</Text>
      <Text style={styles.subtitle}>Status: {state}</Text>
      <View style={styles.btngrp}>
      <Sbutton
          disabled={isDisabled}
          primary={true}
          text="Complaint"
<<<<<<< HEAD
          onPress={()=>{
            setIsDisabled(true);
            navigation.navigate('Let us know your issues', {
=======
          onPress={() => {
            navigation.navigate('Complaint', {
>>>>>>> e400f5c3bb0f9c9134a2105da123060945f0d6ce
              id,
              complaintBy: 'consumer',
            });

          }}
        />
        <Sbutton
          primary={true}
          text="Rate and Review"
          onPress={()=>{
            setIsDisabled(true);
            navigation.navigate('Ratings and Reviews', {
              id,
              sendBy: 'consumer',
            });}}
        />
        <Sbutton
          primary={true}
          text="View Chat"
          onPress={() => {
            navigation.navigate('Chat', {
              JAID,
              state,
              sendBy: 'provider',
            });
          }}
        />
      </View>
    </View>
  );

  const renderItem = ({item}) => {
    if (item.jobassignment[0].state === 'Job completed') {
      return (
        <Item
          fname={item.provider[0].name.fName}
          lname={item.provider[0].name.lName}
          rating={item.provider[0].totalRating / item.provider[0].ratingCount}
          description={item.description}
          id={item._id}
          requestedTime={item.requestedTime}
          JAID={item.jobassignment[0]._id}
          state={item.jobassignment[0].state}
          jobType={item.jobType}
<<<<<<< HEAD
=======
          amount={item.jobassignment[0].quotation.amount}
          time={item.jobassignment[0].quotation.estimatedTime}
>>>>>>> e400f5c3bb0f9c9134a2105da123060945f0d6ce
        />
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={jobs}
        renderItem={renderItem}
        keyExtractor={item => item._id}
      />
    </SafeAreaView>
  );
};

export default JobCompleted;
