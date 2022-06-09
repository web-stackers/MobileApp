import React, {useState} from 'react';
import {Text, View, Alert, SafeAreaView, TextInput, Button} from 'react-native';

import styles from './styles';
import Sbutton from '../../../../components/Sbutton';

import DatePicker from 'react-native-datepicker';

import Sheader from '../../../../components/Sheader';
import StouchableOpacity from '../../../../components/StouchableOpacity';

const JobDetails = () => {
  const handlePress = () => Alert.alert('Form submitted');
  const [inputs, setInputs] = useState('');

  return (
    <View style={styles.container}>
      <Sheader title="Search for provider"></Sheader>
      <SafeAreaView>
        <Text style={styles.text}>When you want the work to be done?</Text>
        <TextInput
          style={styles.input}
          placeholder="Date"
          onChangeText={setInputs}
          value={inputs}
        />
      </SafeAreaView>
      <View style={styles.btngrp}>
        <Sbutton type="primary" text="Submit" onPress={handlePress} />
        <Sbutton type="secondary" text="Cancel" onPress={handlePress} />
      </View>
    </View>
  );
};

export default JobDetails;
