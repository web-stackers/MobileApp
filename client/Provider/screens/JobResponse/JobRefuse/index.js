import React from 'react';
import {View, Image} from 'react-native';
import {RadioButton, Text} from 'react-native-paper';

import styles from './styles';
import Sbutton from '../../../../components/Sbutton';
import StextBox from '../../../../components/FormComponents/StextBox';
import SradioButton from '../../../../components/SradioButton';

const JobRefusePage = ({navigation}) => {
  const [value, setValue] = React.useState('');
  const [reason, setReason] = React.useState('');

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
          onValueChange={newValue => setValue(newValue)}
          value={value}
        >
          <SradioButton
            value='one'
            text='Requested for wrong skill set' 
          />
          <SradioButton
            value='two'
            text='Unavailable on requested day' 
          />
          <SradioButton
            value='three'
            text='Not clear about the request' 
          />
          <SradioButton
            value='four'
            text='Other' 
          />
        </RadioButton.Group>
          <StextBox
            value={reason}
            onChangeText={(value) => setReason(value)}
            disabled={!(value==='four')}
            placeholder="Enter the reason" 
          />
      </View>

      <View style={styles.btngrp}>
        <Sbutton
          primary={true}
          text="Confirm"
          onPress={() =>
            navigation.push('Acknowledgement', {
              title: 'Withdrawal request sent !',
              subtitle: 'Withdrawal request under review. You will receive an email of the results.',
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

export default JobRefusePage;
