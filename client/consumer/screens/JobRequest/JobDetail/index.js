/* eslint-disable prettier/prettier */
import React, {useState, useCallback} from 'react';
import {View, ScrollView, Image} from 'react-native';
import {Text} from 'react-native-paper';
import {useFocusEffect} from '@react-navigation/native';
import dateFormat from 'dateformat';

import axios from 'axios';

import styles from './styles';
import Sbutton from '../../../../components/Sbutton';
import ScheckBox from '../../../../components/ScheckBox';
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
  const [read, setRead] = useState(false);
  const [job, setJob] = useState();
  const {fname, jobType, description, state, amount, time, requestedTime} =
    route.params;
  console.log(fname);
  //   const {id, state, JAID, amount, time} = route.params;

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
        <Map lat={6.920319058452148} long={79.87668603658676} />
        {/* <Map lat={job.address.latitude} long={job.address.longitude} /> */}
      </View>

      {/* {state === 'Request pending' && (
        <View style={styles.btngrp}>
          <ScheckBox
            checked={read}
            setChecked={setRead}
            text="I have read and understood the problem and requirements of above request"
          />

          <Sbutton
            primary={true}
            disabled={!read}
            text="Accept"
            onPress={() =>
              navigation.push('Quotation Details', {
                job: {job},
                JAID: JAID,
              })
            }
          />
          <Sbutton
            disabled={!read}
            text="Refuse"
            onPress={() =>
              navigation.push('Refuse Job', {
                JAID: JAID,
              })
            }
          />
      </View>
      )} */}

      {/* {state === 'Job pending' && (
        <View style={styles.btngrp}>
          <ScheckBox
            checked={read}
            setChecked={setRead}
            text="I wish to withdraw from this job"
          />

          <Sbutton
            primary={true}
            disabled={!read}
            text="Withdraw"
            onPress={() =>
              navigation.push('Job Withdrawal', {
                arisedBy: 'provider',
                routeTo: 'Job Details',
                JAID: JAID,
              })
            }
          />

          <Sbutton
            primary={true}
            text="Message Consumer"
            onPress={() =>
              navigation.push('Chat', {
                sendBy: 'provider',
                JAID: JAID,
              })
            }
          />
        </View>
      )} */}
    </ScrollView>
  );
};

export default JobDetail;
