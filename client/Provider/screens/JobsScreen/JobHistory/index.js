/* eslint-disable prettier/prettier */
import React, {useCallback} from 'react';
import {View, SafeAreaView, TouchableWithoutFeedback} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import {Text} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';

import styles from './styles';

const JobState = ({state, onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.stateField}>
        <Text style={styles.state}>{state}</Text>
        <MaterialCommunityIcons
          name="arrow-right"
          color="#fff"
          size={40}
          style={styles.icon}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const JobHistory = ({navigation, userParams}) => {
  const {type, _id} = userParams;

  const completeJobs = async () => {
    await axios
      .get(
        `http://10.0.2.2:5000/jobAssignment/state/completeJobs/provider/${_id}`,
      )
      /*.then(response => {
        setJob(response.data);
      })*/
      .catch(function (error) {
        console.log(error);
      });
  };

  useFocusEffect(
    useCallback(() =>{
      completeJobs();
    }, [])
  )

  return (
    <SafeAreaView style={styles.container}>
      <JobState
        state="Pending Requests"
        onPress={() => navigation.navigate('Pending Requests', {
          id: `${_id}`,
          type: 'provider',
        })}
      />
      <JobState
        state="Pending Jobs"
        onPress={() => navigation.navigate('Pending Jobs', {
          id: `${_id}`,
          type: 'provider',
        })}
      />
      <JobState
        state="Quotation Sent"
        onPress={() => navigation.navigate('Quotation Sent', {
          id: `${_id}`,
          type: 'provider',
        })}
      />
      <JobState
        state="Quotation Rejected"
        onPress={() => navigation.navigate('Quotation Rejected', {
          id: `${_id}`,
          type: 'provider',
        })}
      />
      <JobState
        state="Withdrawn Jobs"
        onPress={() => navigation.navigate('Withdrawn Jobs', {
          id: `${_id}`,
          type: 'provider',
        })}
      />
      <JobState
        state="Refused Requests"
        onPress={() => navigation.navigate('Refused Requests', {
          id: `${_id}`,
          type: 'provider',
        })}
      />
      <JobState
        state="Completed Jobs"
        onPress={() =>
          navigation.navigate('Completed Jobs', {
            id: `${_id}`,
            type: 'provider',
          })
        }
      />
    </SafeAreaView>
  );
};

export default JobHistory;
