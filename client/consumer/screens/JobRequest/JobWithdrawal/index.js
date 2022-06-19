/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, Image, Alert, ScrollView} from 'react-native';

import styles from './styles';
import Sbutton from '../../../../components/Sbutton';
import StextInput from '../../../../components/FormComponents/StextInput';
import Sheader from '../../../../components/Sheader';

import axios from 'axios';

const JobWithdrawal = ({navigation, route}) => {
  const {JAID} = route.params;
  const [text, setText] = useState('');
  const handleSubmit = () => {
    if (text === '') {
      Alert.alert(
        'Reason for wihdrawal',
        'Reason connot be empty. Please provide why you want to withdraw this request. Then only your request will be consider by admin',
      );
    } else {
      Alert.alert(
        'Withdrawal Request',
        'Are you sure to arise an withdrawal request? Please be mind that, unnecessary withdrawal requests lead for banning you from using an app',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => {
              axios
                .patch(
                  `http://10.0.2.2:5000/jobAssignment/withdrawlPending/${JAID}`,
                  {
                    arisedBy: 'consumer',
                    reason: text,
                  },
                )
                .then(response => {
                  console.log(response.data);
                  navigation.navigate('WithdrawalAcknowledge');
                })
                .catch(function (error) {
                  console.log(error);
                });
            },
          },
        ],
      );
    }
  };

  const AlertCancel = () =>
    Alert.alert(
      'Cancel',
      'Are you sure to leave this page? Your withdrawal request will not be send to the admin',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            navigation.navigate('JobScreen');
          },
        },
      ],
    );
  return (
    <ScrollView style={styles.container}>
      <Sheader title="Requesting for Withdrawal of Job" />
      <View style={styles.message}>
        <Text style={styles.title}>
          Provide a reason for withdrawing from job
        </Text>
        <Image
          style={styles.JRefusePic}
          source={require('../../../../assets/images/JRefuse.png')}
        />
      </View>
      <View style={styles.textField}>
        <Text style={styles.subtitle}>
          Please note that, your reason will be send to the admin.
        </Text>
        <StextInput
          label="Reason"
          value={text}
          onChangeText={text => setText(text)}
        />
      </View>

      <View style={styles.btngrp}>
        <Sbutton primary={true} text="Confirm" onPress={handleSubmit} />
        <Sbutton text="Cancel" onPress={AlertCancel} />
      </View>
    </ScrollView>
  );
};

export default JobWithdrawal;
