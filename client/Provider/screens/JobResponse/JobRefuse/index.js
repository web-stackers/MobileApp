import React from 'react';
import {View, Image} from 'react-native';
import {RadioButton, Text} from 'react-native-paper';

import styles from './styles';
import Sbutton from '../../../../components/Sbutton';
import StextBox from '../../../../components/FormComponents/StextBox';

const JobRefusePage = ({navigation}) => {
  const [value, setValue] = React.useState('');

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

      <RadioButton.Group
        onValueChange={newValue => setValue(newValue)}
        value={value}
        style={styles.reasons}>
        <View style={styles.radioButton}>
          <RadioButton value="one" />
          <Text>Requested for wrong skill set</Text>
        </View>
        <View style={styles.radioButton}>
          <RadioButton value="two" />
          <Text>Unavailable on requested day</Text>
        </View>
        <View style={styles.radioButton}>
          <RadioButton value="three" />
          <Text>Not clear about the request</Text>
        </View>
        <View style={styles.radioButton}>
          <RadioButton value="four" />
          <Text>Other</Text>
        </View>
        <StextBox label="Enter the reason" />
      </RadioButton.Group>

      <View style={styles.btngrp}>
        <Sbutton
          primary={true}
          text="Confirm"
          onPress={() =>
            navigation.push('Acknowledgement', {
              title: 'Informed the Customer !',
              subtitle: 'Provided the reason to the customer',
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
