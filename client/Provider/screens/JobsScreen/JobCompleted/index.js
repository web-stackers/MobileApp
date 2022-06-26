/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */

import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, FlatList, Alert} from 'react-native';
import {Text} from 'react-native-paper';
import axios from 'axios';
import dateFormat from 'dateformat';

import Sheader from '../../../../components/Sheader';
import Sbutton from '../../../../components/Sbutton';
import styles from './styles';

const JobCompleted = ({navigation, route}) => {
  const {id} = route.params;

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch job history of a user
  const fetchJobs = () => {
    setLoading(true);
    axios
      .get(`http://10.0.2.2:5000/job/user/userassignments/provider/${id}`)
      .then(response => {
        setJobs(response.data);
        setLoading(false);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const Complaint = () => {
    setIsDisabled(true);
    navigation.navigate('Complaint', {
      id,
      sendBy: 'provider',
    });
  };

  const RateAndReview = () => {
    setIsDisabled(true);
    navigation.navigate('Rating and Review', {
      id,
      sendBy: 'provider',
    });
  };

  const Item = ({
    fname,
    lname,
    rating,
    description,
    id,
    requestDate,
    state,
    time,
    amount,
    JAID,
    complaint,
    ratingAndReview,
  }) => (
    <View style={styles.item}>
      <Text style={styles.title}>
        {fname} {lname}
      </Text>
      <Text style={styles.subtitle}>Rating : {rating}</Text>
      <Text style={styles.subtitle}>
        Description:{'\n'}
        {description}
      </Text>
      <Text style={styles.subtitle}>
        Job Requested Date:{'\n'}
        {dateFormat(requestDate, 'dddd, mmmm dS, yyyy, h:MM TT')}
      </Text>
      <Text style={styles.subtitle}>
        Estimated complete date:{'\n'}
        {dateFormat(time, 'dddd, mmmm dS, yyyy, h:MM TT')}
      </Text>
      <Text style={styles.subtitle}>
        Estimated amount :{'\nRs '}
        {amount}
      </Text>
      <View style={styles.btngrp}>
        <Sbutton
          primary={true}
          text="Complaint"
          onPress={() => {
            navigation.navigate('Complaint', {
              id,
              complaint: 'provider',
            });
          }}
        />
        <Sbutton
          primary={true}
          text="Rate and Review"
          onPress={() => {
            navigation.navigate('Rating and Review', {
              id,
              ratingAndReview,
            });
          }}
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
          fname={item.consumer[0].name.fName}
          lname={item.consumer[0].name.lName}
          description={item.description}
          id={item._id}
          JAID={item.jobassignment[0]._id}
          // complaint={item.complaint[0].by}
          // ratingAndReview={item.ratingAndReview[0].by}
          rating={parseFloat(
            (
              item.consumer[0].totalRating / item.consumer[0].ratingCount
            ).toFixed(2),
          )}
          state={item.jobassignment[0].state}
          requestDate={item.requestedTime}
          time={item.jobassignment[0].quotation.estimatedTime}
          amount={item.jobassignment[0].quotation.amount}
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
