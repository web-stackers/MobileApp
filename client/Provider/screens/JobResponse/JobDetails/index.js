import React from 'react';
import {View, ScrollView, Text, TextInput, Image} from 'react-native';

import styles from './styles';
import Sbutton from '../../../../components/Sbutton';

const JobDetails = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.JDetailsPic}
        source={require('../../../../assets/images/JDetails.jpg')}
      />

      <Text style={styles.content}>Job Description</Text>

      <View style={styles.btngrp}>
        <Sbutton
          type="primary"
          text="Accept"
          onPress={() => navigation.push('Quotation')}
        />
        <Sbutton
          type="secondary"
          text="Refuse"
          onPress={() => navigation.push('Refuse Job')}
        />
      </View>
    </View>
  );
};

export default JobDetails;
