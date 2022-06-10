import React, {useState} from 'react';
import {Text, View, SafeAreaView, Alert} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import styles from './styles';
import Sbutton from '../../../../components/Sbutton';
import Sdate from '../../../../components/FormComponents/Sdate';
import StextArea from '../../../../components/FormComponents/StextArea';
import Sheader from '../../../../components/Sheader';

const JobDetails = ({navigation}) => {
  const handleSubmit = () => navigation.navigate('JobAcknowledge');
  const [jobType, setJobType] = useState('');

  const AlertCancel = () =>
    Alert.alert(
      'Cancel',
      'Are you sure to go back to home page? It will leads to discard of information',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => navigation.navigate('CategorySelector'),
        },
      ],
    );

  return (
    <View style={styles.container}>
      <Sheader title="Search for provider"></Sheader>
      <SafeAreaView>
        <View>
          <Text style={styles.selectText}>
            {jobType ? `Job Type: ${jobType}` : 'Please select a Job Type'}
          </Text>
          <RNPickerSelect
            style={styles.inputAndroid}
            onValueChange={jobType => setJobType(jobType)}
            items={[
              {label: 'Painter', value: 'Painter'},
              {label: 'Plumber', value: 'Plumber'},
              {label: 'Carpender', value: 'Carpender'},
            ]}
          />
        </View>
        <Text style={styles.text}>When you want the work to be done?</Text>

        <Sdate title="Select Job Requesting Date and Time" />
        <Text style={styles.text}>Description about the issue?</Text>
        <StextArea></StextArea>
      </SafeAreaView>
      <View style={styles.btngrp}>
        <Sbutton type="primary" text="Submit" onPress={handleSubmit} />
        <Sbutton type="secondary" text="Cancel" onPress={AlertCancel} />
      </View>
    </View>
  );
};

export default JobDetails;
