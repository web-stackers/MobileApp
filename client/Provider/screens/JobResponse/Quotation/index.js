import React from 'react';
import {View, Text, TextInput, Image} from 'react-native';

import styles from './styles';
import Sbutton from '../../../../components/Sbutton';

const Quotation = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.quotationDoc}>
        <Text>Quotation</Text>
      </View>

      <View style={styles.btngrp}>
        <Sbutton
          primary={true}
          text="Send quotation"
          onPress={() =>
            navigation.push('Acknowledgement', {
              title: 'Quotation Sent !',
              subtitle: "Please wait for the customer's response",
            })
          }
        />
        <Sbutton
          text="Cancel"
          onPress={() => navigation.navigate('Job Details')}
        />
      </View>
    </View>
  );
};

export default Quotation;
