/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */

import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, FlatList, Alert} from 'react-native';
import {Text} from 'react-native-paper';
import axios from 'axios';

import Sheader from '../../../../components/Sheader';
import Sbutton from '../../../../components/Sbutton';
import styles from './styles';

const JobPending = ({navigation, route}) => {
  /* const {type, CID} =
    route.params; */
  let CID = route.params.id;

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch job history of a user
  const fetchJobs = () => {
    setLoading(true);
    axios
      .get(`http://10.0.2.2:5000/job/user/userassignments/consumer/${CID}`)
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

  // const viewAddress = (JAID, jobType) => {
  //   console.log('button pressed');
  //   axios
  //     .get(`http://10.0.2.2:5000/job/${id}`)
  //     .then(response => {
  //       console.log(response.data);
  //       navigation.navigate('QuotationDetails', {
  //         JobType: jobType,
  //         JAID: JAID,
  //         JA: response.data,
  //       });
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

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
  }) => (
    <View style={styles.item}>
      <Text style={styles.title}>
        {fname} {lname}
      </Text>
      <Text style={styles.subtitle}>Description: {description}</Text>
      <Text style={styles.subtitle}>JobType: {jobType}</Text>
      <Text style={styles.subtitle}>Status: {state}</Text>
      <View style={styles.btngrp}>
        <Sbutton
          primary={true}
          text="View"
          onPress={() => {
            console.log(fname);
            navigation.navigate('Job Detail', {
              fname,
              jobType,
              description,
              state,
              amount,
              time,
              requestedTime,
              id,
              JAID,
            });
          }}
        />
        <Sbutton
          primary={true}
          text="Message"
          onPress={() => {
            navigation.navigate('Chat', {
              JAID: JAID,
              sendBy: 'consumer',
              state: state,
            });
          }}
        />
        <Sbutton
          primary={true}
          text="Withdraw job"
          onPress={() =>
            navigation.navigate('JobWithdrawal', {
              JAID: JAID,
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
          fname={item.provider[0].name.fName}
          lname={item.provider[0].name.lName}
          rating={item.provider[0].totalRating / item.provider[0].ratingCount}
          description={item.description}
          id={item._id}
          requestedTime={item.requestedTime}
          JAID={item.jobassignment[0]._id}
          state={item.jobassignment[0].state}
          jobType={item.jobType}
          amount={item.jobassignment[0].quotation.amount}
          time={item.jobassignment[0].quotation.estimatedTime}
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
