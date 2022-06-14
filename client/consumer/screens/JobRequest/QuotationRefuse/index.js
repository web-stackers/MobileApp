import React, {useState} from 'react';
import {View, Text, Image, Alert} from 'react-native';

import styles from './styles';
import Sbutton from '../../../../components/Sbutton';
import StextInput from '../../../../components/FormComponents/StextInput';

import axios from 'axios';

const QuotationRefuse = ({navigation, route}) => {
  const {id} = route.params;
  const [text, setText] = useState('');
  const handleSubmit = () => {
    if (text === '') {
      Alert.alert(
        'Reason for Refusal',
        'Please provide a reason, why you want to refuse the quotation.',
      );
    } else {
      Alert.alert(
        'Rejection of Quotation',
        'Are you sure to submit the reason?',
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
                  'http://10.0.2.2:5000/jobAssignment/quotationRejected/6213638f657adfba60a68786',
                  {reason: text},
                )
                .then(response => {
                  console.log(response.data);
                  navigation.navigate('CategorySelector');
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
  return (
    <View style={styles.container}>
      <View style={styles.message}>
        <Text style={styles.title}>
          Please provide a reason for refusing this Quotation
        </Text>
        <Image
          style={styles.JRefusePic}
          source={require('../../../../assets/images/JRefuse.png')}
        />
      </View>

      <View style={styles.textField}>
        <StextInput
          label="Reason"
          multiline={true}
          value={text}
          onChangeText={text => setText(text)}
        />
      </View>

      <View style={styles.btngrp}>
        <Sbutton primary={true} text="Submit" onPress={handleSubmit} />
        <Sbutton
          text="Cancel"
          onPress={() => navigation.navigate('CategorySelector')}
        />
      </View>
    </View>
  );
};

export default QuotationRefuse;
