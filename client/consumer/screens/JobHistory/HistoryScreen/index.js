/* eslint-disable prettier/prettier */
import React from 'react';
import {View, SafeAreaView, TouchableWithoutFeedback} from 'react-native';
import {Text} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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

  return (
    <SafeAreaView style={styles.container}>
      <JobState
        state="Request Sent"
        onPress={() => navigation.navigate('Request Sent')}
      />
      <JobState
        state="Pending Quotation"
        onPress={() => navigation.navigate('Pending Quotation')}
      />
      <JobState
        state="Pending Jobs"
        onPress={() => navigation.navigate('Pending Jobs')}
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
      <JobState
        state="Refused Request"
        onPress={() => navigation.navigate('Refused Request')}
      />
      <JobState
        state="Quotation Rejected"
        onPress={() => navigation.navigate('Quotation Rejected')}
      />
      <JobState
        state="Withdrawn Jobs"
        onPress={() => navigation.navigate('Withdrawn Jobs')}
      />
    </SafeAreaView>
  );
};

export default JobHistory;
