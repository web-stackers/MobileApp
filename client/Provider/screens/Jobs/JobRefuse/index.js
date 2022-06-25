import React from 'react';
import {View, Image, Alert} from 'react-native';
import {RadioButton, Text, TextInput} from 'react-native-paper';
import {useTheme} from 'react-native-paper';
import axios from 'axios';

import styles from './styles';
import Sbutton from '../../../../components/Sbutton';
import SradioButton from '../../../../components/SradioButton';

const JobRefusePage = ({navigation, route}) => {
  const {colors} = useTheme();
  const [value, setValue] = React.useState('');
  const [reason, setReason] = React.useState('');
  const [otherReason, setOtherReason] = React.useState('');
  const {JAID} = route.params;

  const texts = [
    'Requested for wrong skill set',
    'Unavailable on requested day',
    'Not clear about the request' ,
    'Other'
  ]

  // Function to validate reason and post to database
  const validateReason = () => {
    if (reason==='' || value === 3 && otherReason==='') {
      Alert.alert(
        'Reason for refusal',
        'Please provide the reason for refusing this job',
      );
    } else {
        axios.patch(`http://10.0.2.2:5000/jobAssignment/requestRejected/${JAID}`, {
            reason: value===3? otherReason: reason,
        })
        .then((response) => {
            navigation.push('Acknowledgement', {
              title: 'Informed the customer !',
              subtitle: 'Customer has been informed about the refusal of job request.',
              routeTo: "Job History"
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
        {value===3 && <TextInput
          value={otherReason}
          onChangeText={(value) => setOtherReason(value)}
          mode="outlined"
          multiline={true}
          theme={{ roundness: 6 }} 
          outlineColor="#797D7F"
          activeOutlineColor={colors.primary}
          style={styles.input}
          placeholder="Enter the reason" 
          disabled={!(value===3)}
        />}
      </View>

      <View style={styles.btngrp}>
        <Sbutton
          primary={true}
          text="Confirm"
          onPress={() => validateReason()}
        />
        <Sbutton
          text="Cancel"
          onPress={() => navigation.pop(1)}
        />
      </View>
    </View>
  );
};

export default JobRefusePage;