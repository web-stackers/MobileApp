/* eslint-disable prettier/prettier */
import React from 'react';
import {View, ScrollView, Image} from 'react-native';
import {Text} from 'react-native-paper';
import dateFormat from 'dateformat';

import styles from './styles';
import Sbutton from '../../../../components/Sbutton';
import Map from '../../../../components/Map';

const DetailField = ({field, detail}) => {
  return (
    <View style={styles.detailField}>
      <Text style={styles.field}>{field}</Text>
      <Text style={styles.detail}>{detail}</Text>
    </View>
  );
};

const JobDetail = ({navigation, route}) => {
  const {
    fname,
    jobType,
    description,
    state,
    amount,
    time,
    requestedTime,
    job,
    JAID,
    id,
  } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.JDetailsPic}
        source={require('../../../../assets/images/JDetails.png')}
      />

      <View style={styles.content}>
        <DetailField field="Provider Name" detail={fname} />
        <DetailField field="Job Type" detail={jobType} />
        <DetailField field="Job Description" detail={description} />
        <DetailField
          field="Requested Date"
          detail={dateFormat(requestedTime, 'fullDate')}
        />
        <DetailField
          field="Requested Time"
          detail={dateFormat(requestedTime, 'hh:MM TT')}
        />
        <DetailField field="Job Status" detail={state} />
        <DetailField field="Quotation Amount" detail={amount} />
        <DetailField
          field="Work Finish Date"
          detail={dateFormat(time, 'fullDate')}
        />
        <DetailField
          field="Work Finish Time"
          detail={dateFormat(time, 'hh:MM TT')}
        />
      </View>

      {/* Map to show location */}
      <View style={styles.map}>
        <Text style={styles.field}>Location</Text>
        <Map lat={job.address.latitude} long={job.address.longitude} />
      </View>

      {state === 'Job pending' && (
        <View style={styles.btngrp}>
          <Sbutton
            primary={true}
            text="Message Provider"
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
      )}
    </ScrollView>
  );
};

export default JobDetail;
