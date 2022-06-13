/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text, Image, Alert} from 'react-native';

import styles from './styles';
import Sbutton from '../../../../components/Sbutton';
import ScheckBox from '../../../../components/ScheckBox';
import Sheader from '../../../../components/Sheader';

import axios from 'axios';

const QuotationDetails = ({navigation, route}) => {
  const {jobTypeSelect} = route.params;
  const [quotations, setQuotations] = useState([]);
  const [checked, setChecked] = useState(false);

  const getQuotations = () => {
    axios
      .get('http://10.0.2.2:5000/jobAssignment/6213638f657adfba60a68786')
      // .get(
      //   'http://10.0.2.2:5000/job/user/userQuotation/621341023987d49e1f22f7a8',
      // )
      .then(response => {
        setQuotations(response.data);
        console.log(quotations);
        console.log(quotations.quotation.amount);
        console.log(quotations.quotation.approximatedDuration.days);
      });
  };

  useEffect(() => {
    getQuotations();
  }, []);

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
            onPress: () => navigation.navigate('QuotationAcknowledge'),
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
          onPress: () => navigation.navigate('QuotationRefuse'),
        },
      ],
    );

  return (
    <ScrollView style={styles.container}>
      <Sheader title="Quotation Details"></Sheader>
      <Image
        style={styles.JDetailsPic}
        source={require('../../../../assets/images/JDetails.png')}
      />

      <Text style={styles.subContent}>Job Type: {jobTypeSelect} </Text>

      <Text style={styles.subContent}>
        Quotation Amount:
        {/* {quotations.quotation.amount} */}
      </Text>
      <Text style={styles.subContent}>Approximated Duration</Text>
      <Text style={styles.subSubContent}>
        Days:
        {/* {quotations.quotation.approximatedDuration.days} */}
      </Text>
      <Text style={styles.subSubContent}>
        minutes:
        {/* {quotations.quotation.approximatedDuration.minutes} */}
      </Text>

      <View style={styles.btngrp}>
        <ScheckBox
          style={styles.checkBox}
          checked={checked}
          setChecked={setChecked}
          text="I have read and understood the problem and requirements of above request"
        />
        <Sbutton primary={true} text="Accept" onPress={handleAccept} />
        <Sbutton text="Refuse" onPress={AlertReject} />
      </View>
    </ScrollView>
  );
};

export default QuotationDetails;
