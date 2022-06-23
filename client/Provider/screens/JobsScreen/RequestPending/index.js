/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */

import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, FlatList, Alert} from 'react-native';
import { Text } from 'react-native-paper';
import dateFormat from 'dateformat';
import axios from 'axios';

import Sbutton from '../../../../components/Sbutton';
import styles from './styles';

const RequestPending = ({navigation, route}) => {
  const {id} = route.params;

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch job history of a user
  const fetchJobs = () => {
    setLoading(true);
    axios
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
    JAID,
  }) => (
    <View style={styles.item}>
      <Text style={styles.title}>
        {fname} {lname}
      </Text>
      <Text style={styles.subtitle}>Rating : {rating}</Text>
      <Text style={styles.subtitle}>
        Job Initialized Date:{"\n"}
        {dateFormat(initializedDate, "dddd, mmmm dS, yyyy, h:MM TT")}
      </Text>
      <View style={styles.btngrp}>
        <Sbutton
          primary={true}
          text="View Request"
          onPress={() => {
            navigation.navigate('Job Details', {
              id,
              state,
              JAID,
            });
          }}
        />
      </View>
    </View>
  );

  const renderItem = ({item}) => {
    if (item.jobassignment[0].state === 'Request pending') {
      return (
        <Item
          fname={item.consumer[0].name.fName}
          lname={item.consumer[0].name.lName}
          rating={parseFloat((item.consumer[0].totalRating / item.consumer[0].ratingCount).toFixed(2))}
          id={item._id}
          JAID={item.jobassignment[0]._id}
          state={item.jobassignment[0].state}
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

export default RequestPending;
