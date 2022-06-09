import React, {useState} from 'react';
import {Text, View, SafeAreaView, TextInput, Button} from 'react-native';

import styles from './styles';
import Sbutton from '../../../../components/Sbutton';

import DatePicker from 'react-native-datepicker';

import Sheader from '../../../../components/Sheader';

const JobDetails = ({navigation}) => {
  const handleSubmit = () => navigation.navigate('JobAcknowledge');
  const handleCancel = () => navigation.navigate('CategorySelector');
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
        <Sbutton type="primary" text="Submit" onPress={handleSubmit} />
        <Sbutton type="secondary" text="Cancel" onPress={handleCancel} />
      </View>
    </View>
  );
};

export default JobDetails;
