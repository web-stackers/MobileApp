import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text, Image, Alert} from 'react-native';

import styles from './styles';
import Sbutton from '../../../../components/Sbutton';
import ScheckBox from '../../../../components/ScheckBox';
import Sheader from '../../../../components/Sheader';

import axios from 'axios';

const QuotationDetails = ({navigation}) => {
  const [quotations, setQuotations] = useState([]);
  const [checked, setChecked] = useState(false);

  const getQuotations = () => {
    axios
      .get('http://10.0.2.2:5000/jobTypeCategory/627677245ef6e55d7f9bc96c')
      .then(response => {
        console.log(response.data);
        setQuotations(response.data);
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

      <Text style={styles.subContent}>Job Type:</Text>
      <Text style={styles.subContent}>Job Requested Date:</Text>
      <Text style={styles.subContent}>Job Requested Time:</Text>
      <Text style={styles.subContent}>Provider Name:</Text>
      <Text style={styles.subContent}>Quotation Amount:</Text>
      <Text style={styles.subContent}>Approximated Duration:</Text>

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
