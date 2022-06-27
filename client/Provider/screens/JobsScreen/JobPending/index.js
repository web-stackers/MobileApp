/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */

import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, FlatList, Alert} from 'react-native';
import {Text} from 'react-native-paper';
import dateFormat from 'dateformat';
import axios from 'axios';

import Sheader from '../../../../components/Sheader';
import Sbutton from '../../../../components/Sbutton';
import styles from './styles';

const JobPending = ({navigation, route}) => {
  const {id} = route.params;

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch job history of a user
  const fetchJobs = async () => {
    setLoading(true);
    await axios
      .get(
        `http://10.0.2.2:5000/job/user/userassignments/provider/${id}`,
      )
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

  const Item = ({
    fname,
    lname,
    rating,
    id,
    state,
    initializedDate,
    amount,
    JAID,
    time
  }) => (
    <View style={styles.item}>
      <Text style={styles.title}>
        {fname} {lname}
      </Text>
      <Text style={styles.subtitle}>Rating : {rating}</Text>
      <Text style={styles.subtitle}>
        Job Initialized Date:{'\n'}
        {dateFormat(initializedDate, 'dddd, mmmm dS, yyyy, h:MM TT')}
      </Text>
      <View style={styles.btngrp}>
        <Sbutton
          primary={true}
          text="View Job"
          onPress={() =>
            navigation.push('Job Details', {
              id:id,
              JAID: JAID,
              state:state,
              amount:amount,
              time:time
            })
          }
        />
        <Sbutton
          primary={true}
          text="Message Consumer"
          onPress={() =>
            navigation.push('Chat', {
              state,
              sendBy: 'provider',
              JAID,
            })
          }
        />
      </View>
    </View>
  );

  const renderItem = ({item}) => {
    if (item.jobassignment[0].state === 'Job pending') {
      return (
        <Item
          fname={item.consumer[0].name.fName}
          lname={item.consumer[0].name.lName}
          rating={parseFloat(
            (
              item.consumer[0].totalRating / item.consumer[0].ratingCount
            ).toFixed(2),
          )}
          id={item._id}
          JAID={item.jobassignment[0]._id}
          state={item.jobassignment[0].state}
          amount={item.jobassignment[0].quotation.amount}
          time={item.jobassignment[0].quotation.estimatedTime}
          initializedDate={item.initializedDate}
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

export default JobPending;
