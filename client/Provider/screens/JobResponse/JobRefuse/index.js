import React from 'react';
import {View, Image, Alert} from 'react-native';
import {RadioButton, Text} from 'react-native-paper';
import axios from 'axios';

import styles from './styles';
import Sbutton from '../../../../components/Sbutton';
import StextBox from '../../../../components/FormComponents/StextBox';
import SradioButton from '../../../../components/SradioButton';

const JobRefusePage = ({navigation}) => {
  const [value, setValue] = React.useState('');
  const [reason, setReason] = React.useState('');
  const [otherReason, setOtherReason] = React.useState('');

  const texts = [
    'Requested for wrong skill set',
    'Unavailable on requested day',
    'Not clear about the request' ,
    'Other'
  ]

  const validateReason = () => {
    if (reason==='' || value === 3 && otherReason==='') {
      Alert.alert(
        'Reason for refusal',
        'Please provide the reason for refusing this job',
      );
    } else {
        axios.patch(`http://10.0.2.2:5000/jobAssignment/requestRejected/62136a2d657adfba60a6878a`, {
            reason: value===3? otherReason: reason,
        })
        .then((response) => {
            navigation.push('Acknowledgement', {
              title: 'Informed the customer !',
              subtitle: 'Customer has been informed about the refusal of job request.',
            })
        })
        .catch(function (error) {
            console.log(error);
        });
    }
  } 

  return (
    <View style={styles.container}>
      <View style={styles.message}>
        <Text style={styles.title}>
          Please provide a reason for refusing this job
        </Text>
        <Image
          style={styles.JRefusePic}
          source={require('../../../../assets/images/JRefuse.png')}
        />
      </View>

      <View style={styles.reasons}>
        <RadioButton.Group
          onValueChange={newValue => {setValue(newValue); setReason(texts[newValue]);}}
          value={value}
        >
          <SradioButton
            value={0}
            text={texts[0]}
          />
          <SradioButton
            value={1}
            text={texts[1]}
          />
          <SradioButton
            value={2}
            text={texts[2]}
          />
          <SradioButton
            value={3}
            text={texts[3]} 
          />
        </RadioButton.Group>
        <StextBox
          value={otherReason}
          onChangeText={(value) => setOtherReason(value)}
          disabled={!(value===3)}
          placeholder="Enter the reason" 
        />
      </View>

      <View style={styles.btngrp}>
        <Sbutton
          primary={true}
          text="Confirm"
          onPress={() => validateReason()}
        />
        <Sbutton
          text="Cancel"
          onPress={() => navigation.navigate('Job Details')}
        />
      </View>
    </View>
  );
};

export default JobRefusePage;
