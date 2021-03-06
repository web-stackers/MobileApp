/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text, Image, Alert} from 'react-native';
import dateFormat from 'dateformat';

import styles from './styles';
import Sbutton from '../../../../components/Sbutton';
import ScheckBox from '../../../../components/ScheckBox';
import Sheader from '../../../../components/Sheader';

import axios from 'axios';

const DetailField = ({field, detail}) => {
  return (
    <View style={styles.detailField}>
      <Text style={styles.field}>{field}</Text>
      <Text style={styles.detail}>{detail}</Text>
    </View>
  );
};

const QuotationDetails = ({navigation, route}) => {
  const {JA, jobType, JAID} = route.params;

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

      <View style={styles.content}>
        <DetailField field="Job Type" detail={jobType} />
        <DetailField field="Quotation Amount" detail={JA.quotation.amount} />
        <DetailField
          field="Work Finish Date"
          detail={dateFormat(JA.quotation.estimatedTime, 'fullDate')}
        />
        <DetailField
          field="Work Finish Time"
          detail={dateFormat(JA.quotation.estimatedTime, 'hh:MM TT')}
        />
      </View>

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