/* eslint-disable no-lone-blocks */
import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, FlatList, Alert} from 'react-native';
import {Text} from 'react-native-paper';
import axios from 'axios';

import Sheader from '../../../../components/Sheader';
import Sbutton from '../../../../components/Sbutton';
import styles from './styles';

const RequestSent = ({navigation, route}) => {
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

  const cancel = () =>
    Alert.alert('Are you want to resend the request ?', [
      {
        text: 'Cancel',
        onPress: () => navigation.navigate('JobHistoryScreen'),
        style: 'cancel',
      },
      {
        text: 'Ok',
        onPress: () => {
          navigation.navigate('CategorySelector');
        },
      },
    ]);

  const Item = ({fname, lname, rating, description, id, state, jobType}) => (
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
          text="Cancel"
          onPress={() => {
            Alert.alert('Are you want to resend the request ?', [
              {
                text: 'Cancel',
                onPress: () => navigation.navigate('JobHistoryScreen'),
                style: 'cancel',
              },
              {
                text: 'Ok',
                onPress: () => {
                  navigation.navigate('CategorySelector');
                },
              },
            ]);
          }}
        />
      </View>
    </View>
  );

  const renderItem = ({item}) => {
    if (item.jobassignment[0].state === 'Request pending') {
      return (
        <Item
          fname={item.provider[0].name.fName}
          lname={item.provider[0].name.lName}
          rating={item.provider[0].totalRating / item.provider[0].ratingCount}
          description={item.description}
          id={item._id}
          state={item.jobassignment[0].state}
          jobType={item.jobType}
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

export default RequestSent;
