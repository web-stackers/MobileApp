/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */

import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, FlatList, Alert} from 'react-native';
import { Text } from 'react-native-paper';
import axios from 'axios';
import dateFormat from 'dateformat';

import Sheader from '../../../../components/Sheader';
import Sbutton from '../../../../components/Sbutton';
import styles from './styles';

const JobWithdrawal = ({navigation, route}) => {
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

  const Item = ({fname, lname, description, arisedBy,reason, state, initializedDate, rating, admin}) => (
    <View style={styles.item}>
      <Text style={styles.title}>
        {fname} {lname}
      </Text>
      <Text style={styles.subtitle}>Rating : {rating}</Text>
      <Text style={styles.subtitle}>Description: {"\n"}{description}</Text>
      <Text style={styles.subtitle}>
        Job Initialized Date:{"\n"}
        {dateFormat(initializedDate, "dddd, mmmm dS, yyyy, h:MM TT")}
      </Text>
      <Text style={styles.subtitle}>Arised by: {arisedBy}</Text>
      <Text style={styles.subtitle}>Reason:{"\n"}{reason}</Text>
      <Text style={styles.subtitle}>Admin Response:{"\n"}{admin}</Text>
      <View style={styles.btngrp}>
      </View>
    </View>
  );

  const renderItem = ({item}) => {
      if (item.jobassignment[0].state === "Job withdrawn" || item.jobassignment[0].state === "Withdrawal pending") {
        return (
          <Item
            fname={item.consumer[0].name.fName}
            lname={item.consumer[0].name.lName}
            description={item.description}
            rating={parseFloat((item.consumer[0].totalRating / item.consumer[0].ratingCount).toFixed(2))}
            id={item._id}
            state={item.jobassignment[0].state}
            reason={item.jobassignment[0].withdrawn.reason}
            arisedBy={item.jobassignment[0].withdrawn.arisedBy}
            admin={item.jobassignment[0].withdrawn.adminResponse}
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

export default JobWithdrawal;
