/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */

import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, FlatList, Text, Alert} from 'react-native';
import axios from 'axios';

import Sheader from '../../../../components/Sheader';
import Sbutton from '../../../../components/Sbutton';
import styles from './styles';

const JobCompleted = ({navigation, route}) => {
  /* const {type, CID} =
    route.params; */
  let CID = '62132b7bc4afd22e5fc49677';
  let type = 'consumer';

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch job history of a user
  const fetchJobs = () => {
    setLoading(true);
    axios
      .get(
        `http://10.0.2.2:5000/job/user/userassignments/consumer/62132c85c4afd22e5fc49685`,
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
    description,
    id,
    state,
    jobType,
    complaint,
    ratingAndReview,
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
          text="Complaint"
          onPress={() => {
            navigation.navigate('complaint', {
              id,
              complaint,
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
          state={item.jobassignment[0].state}
          jobType={item.jobType}
          /* reason={item.userJobs[0].withdrawn?.reason|| ''}
        amount={item.userJobs[0].quotation?.amount|| ''} */
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