import React, {useState} from 'react';
import {View, Text, Image, Alert} from 'react-native';

import styles from './styles';
import Sbutton from '../../../../components/Sbutton';
import StextInput from '../../../../components/FormComponents/StextInput';

const JobWithdrawal = ({navigation}) => {
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
            onPress: () => navigation.navigate('WithdrawalAcknowledge'),
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
          onPress: () => navigation.navigate('CategorySelector'),
        },
      ],
    );
  return (
    <View style={styles.container}>
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
          multiline={true}
          value={text}
          onChangeText={text => setText(text)}
        />
      </View>

      <View style={styles.btngrp}>
        <Sbutton primary={true} text="Confirm" onPress={handleSubmit} />
        <Sbutton text="Cancel" onPress={AlertCancel} />
      </View>
    </View>
  );
};

export default JobWithdrawal;
