import React from 'react';
import {View, Text, Image, Alert} from 'react-native';

import styles from './styles';
import Sbutton from '../../../../components/Sbutton';
import StextInput from '../../../../components/FormComponents/StextInput';

const JobWithdrawal = ({navigation}) => {
  const AlertAccept = () =>
    Alert.alert(
      'Withdrawal Request',
      'Are you sure to arise an withdrawal request? Please be mind that, arising withdrawal requests unnecessarily leads to ban you from using an app',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => navigation.navigate('WithdrawalAcknowledge'),
        },
      ],
    );
  const AlertCancel = () =>
    Alert.alert('Cancel', 'Are you sure to leave this page? ', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => navigation.navigate('CategorySelector'),
      },
    ]);
  return (
    <View style={styles.container}>
      <View style={styles.message}>
        <Text style={styles.title}>
          Provide a reason for withdrawing from job
        </Text>
        <Image
          style={styles.JRefusePic}
          source={require('../../../../assets/images/JRefuse.jpg')}
        />
      </View>
      <View style={styles.textField}>
        <StextInput label="Reason" multiline={true} />
      </View>

      <View style={styles.btngrp}>
        <Sbutton type="primary" text="Confirm" onPress={AlertAccept} />
        <Sbutton type="secondary" text="Cancel" onPress={AlertCancel} />
      </View>
    </View>
  );
};

export default JobWithdrawal;
