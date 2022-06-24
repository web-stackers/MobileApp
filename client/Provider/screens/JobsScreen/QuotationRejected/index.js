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

const QuotationRejected = ({navigation, route}) => {
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

  const Item = ({fname, lname, rating, description, amount, time, reason, requestDate}) => (
    <View style={styles.item}>
      <Text style={styles.title}>
        {fname} {lname}
      </Text>
      <Text style={styles.subtitle}>Rating : {rating}</Text>
      <Text style={styles.subtitle}>Description: {"\n"}{description}</Text>
      <Text style={styles.subtitle}>
        Job Requested Date:{"\n"}
        {dateFormat(requestDate, "dddd, mmmm dS, yyyy, h:MM TT")}
      </Text>
      <Text style={styles.subtitle}>
        Estimated complete date:{"\n"}
        {dateFormat(time, "dddd, mmmm dS, yyyy, h:MM TT")}
      </Text>
      <Text style={styles.subtitle}>Estimated amount :{"\nRs "}{amount}</Text>
      <Text style={styles.subtitle}>Reason :{"\n"}{reason}</Text>
      <View style={styles.btngrp}>
      </View>
    </View>
  );

  const renderItem = ({item}) => {
      if (item.jobassignment[0].state === "Quotation rejected") {
        return (
          <Item
            fname={item.consumer[0].name.fName}
            lname={item.consumer[0].name.lName}
            rating={parseFloat((item.consumer[0].totalRating / item.consumer[0].ratingCount).toFixed(2))}
            description={item.description}
            id={item._id}
            state={item.jobassignment[0].state}
            amount={item.jobassignment[0].quotation.amount}
            requestDate={item.requestedTime}
            time={item.jobassignment[0].quotation.estimatedTime}
            reason={item.jobassignment[0].reason}
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

export default QuotationRejected;
