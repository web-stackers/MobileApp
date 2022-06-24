/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */

import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, FlatList, Alert} from 'react-native';
import {Text} from 'react-native-paper';
import axios from 'axios';

import Sbutton from '../../../../components/Sbutton';
import styles from './styles';

const QuotationPending = ({navigation, route}) => {
  let CID = route.params.id;

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  const viewQuotation = (JAID, jobType) => {
    console.log('button pressed');
    axios
      .get(`http://10.0.2.2:5000/jobAssignment/${JAID}`)
      .then(response => {
        navigation.navigate('QuotationDetails', {
          JobType: jobType,
          JAID: JAID,
          JA: response.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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

  const Item = ({
    fname,
    lname,
    rating,
    description,
    id,
    state,
    jobType,
    JAID,
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
          primary={true}
          text="View Quotation"
          onPress={() => viewQuotation(JAID, jobType)}
        />
      </View>
    </View>
  );

  const renderItem = ({item}) => {
    if (item.jobassignment[0].state === 'Quotation sent') {
      return (
        <Item
          fname={item.provider[0].name.fName}
          lname={item.provider[0].name.lName}
          rating={item.provider[0].totalRating / item.provider[0].ratingCount}
          description={item.description}
          id={item._id}
          JAID={item.jobassignment[0]._id}
          state={item.jobassignment[0].state}
          jobType={item.jobType}
          // qAmount={item.jobassignment[0].quotation.amount}

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

export default QuotationPending;
