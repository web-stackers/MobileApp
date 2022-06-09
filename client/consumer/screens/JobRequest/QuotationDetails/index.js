import React from 'react';
import {View, Text, Image, Alert} from 'react-native';

import styles from './styles';
import Sbutton from '../../../../components/Sbutton';

const QuotationDetails = ({navigation}) => {
  const AlertAccept = () =>
    Alert.alert(
      'Accepting Quotation',
      'Are you sure to accept the quotation?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => navigation.navigate('QuotationAcknowledge'),
        },
      ],
    );

  const AlertReject = () =>
    Alert.alert(
      'Rejecting the Quotation',
      'Are you sure to reject the quotation?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => navigation.navigate('QuotationAcknowledge'),
        },
      ],
    );

  return (
    <View style={styles.container}>
      <Image
        style={styles.JDetailsPic}
        source={require('../../../../assets/images/JDetails.jpg')}
      />

      <Text style={styles.content}>Quotation Details</Text>
      <Text style={styles.subContent}>Job Type:</Text>
      <Text style={styles.subContent}>Job Requested Date:</Text>
      <Text style={styles.subContent}>Job Requested Time:</Text>
      <Text style={styles.subContent}>Provider Name:</Text>
      <Text style={styles.subContent}>Quotation Amount:</Text>
      <Text style={styles.subContent}>Approximated Duration:</Text>

      <View style={styles.btngrp}>
        <Sbutton type="primary" text="Accept" onPress={AlertAccept} />
        <Sbutton type="secondary" text="Refuse" onPress={AlertReject} />
      </View>
    </View>
  );
};

export default QuotationDetails;
