import React, {useState} from 'react';
import {Text, View, SafeAreaView, Alert} from 'react-native';
import {Linking} from 'react-native';

import styles from './styles';
import Sbutton from '../../../../components/Sbutton';
import StextInput from '../../../../components/FormComponents/StextInput';
import Sheader from '../../../../components/Sheader';
import Sselect from '../../../../components/FormComponents/Sselect';
import Sdate from '../../../../components/FormComponents/Sdate';

const JobDetails = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [jobType, setJobType] = useState('');
  const [description, setDescription] = useState('');

  const jobList = [
    {
      label: 'Plumber',
      value: 'Plumber',
    },
    {
      label: 'Painter',
      value: 'Painter',
    },
    {
      label: 'Carpender',
      value: 'Carpender',
    },
  ];

  const handleSubmit = () => navigation.navigate('NoProviders');

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
        <View style={styles.containerStyle}>
          <Sselect
            jobList={jobList}
            jobType={jobType}
            setJobType={setJobType}
          />
        </View>

        <View style={styles.description}>
          <Text style={styles.text}>Description about the issue?</Text>
          <StextInput
            label="Job Description"
            value={description}
            onChangeText={description => setDescription(description)}
          />
        </View>
      </SafeAreaView>
      <Text style={styles.text}>When you want the work to be done?</Text>

      <Sdate date={date} setDate={setDate} />

      <Text
        style={styles.linkText}
        onPress={() => Linking.openURL('http://google.com')}>
        Change workplace location
      </Text>

      <View style={styles.btngrp}>
        <Sbutton primary={true} text="Search Provider" onPress={handleSubmit} />
        <Sbutton text="Cancel" onPress={AlertCancel} />
      </View>
    </View>
  );
};

export default JobDetails;
