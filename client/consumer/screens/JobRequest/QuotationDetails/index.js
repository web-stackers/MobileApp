/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text, Image, Alert} from 'react-native';

import styles from './styles';
import Sbutton from '../../../../components/Sbutton';
import ScheckBox from '../../../../components/ScheckBox';
import Sheader from '../../../../components/Sheader';

import axios from 'axios';

const QuotationDetails = ({navigation, route}) => {
  console.log(
    'Check JA is passed....................................................................',
  );
  const {JA} = route.params;
  console.log(JA);
  const JAID = JA._id;

  const [checked, setChecked] = useState(false);

  const handleAccept = () => {
    if (checked === false) {
      Alert.alert(
        'Accepting Condition',
        'Please accept our terms and conditions to continue the process',
      );
    } else {
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
            onPress: () => {
              axios
                .patch(
                  `http://10.0.2.2:5000/jobAssignment/quotationAccepted/${JAID}`,
                )
                .then(response => {
                  console.log(response.data);
                  navigation.navigate('QuotationAcknowledge');
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
          onPress: () => {
            axios
              .patch(
                `http://10.0.2.2:5000/jobAssignment/quotationRejected/${JAID}`,
              )
              .then(response => {
                console.log(response.data);
                navigation.navigate('QuotationRefuse', {
                  JAID: JAID,
                });
              })
              .catch(function (error) {
                console.log(error);
              });
          },
        },
      ],
    );

  return (
    <ScrollView style={styles.container}>
      <Sheader title="Quotation Details" />
      <Image
        style={styles.JDetailsPic}
        source={require('../../../../assets/images/JDetails.png')}
      />

      <Text style={styles.subContent}>
        Job Type:
        {/* {jobTypeSelect}  */}
      </Text>

      <Text style={styles.subContent}>
        Quotation Amount: {JA.quotation.amount}
      </Text>
      <Text style={styles.subContent}>
        Estimated Time: {'  '}
        {JA.quotation.estimatedTime.substring(11, 16)}
        {'         '}
        {JA.quotation.estimatedTime.substring(0, 10)}
      </Text>
      <View style={styles.checkBox}>
        <ScheckBox
          // style={styles.checkBox}
          checked={checked}
          setChecked={setChecked}
          text="I have read and understood the problem and requirements of above request"
        />
      </View>

      <View style={styles.btngrp}>
        <Sbutton primary={true} text="Accept" onPress={handleAccept} />
        <Sbutton text="Refuse" onPress={AlertReject} />
      </View>
    </ScrollView>
  );
};

export default QuotationDetails;
