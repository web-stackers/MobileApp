import React from 'react';
import {View, Text, Image, Alert} from 'react-native';

import styles from './styles';
import Sbutton from '../../../../components/Sbutton';

const QuotationDetails = ({navigation}) => {
  const handlePress = () => navigation.navigate('CategorySelector');
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
        <Sbutton type="primary" text="Accept" onPress={handlePress} />
        <Sbutton type="secondary" text="Refuse" onPress={handlePress} />
      </View>
    </View>
  );
};

export default QuotationDetails;
