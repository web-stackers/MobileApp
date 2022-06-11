import React, {useState} from 'react';
import {Text, View, SafeAreaView, Alert} from 'react-native';

import styles from './styles';
import Sbutton from '../../../../components/Sbutton';
import Sdate from '../../../../components/FormComponents/Sdate';
import StextInput from '../../../../components/FormComponents/StextInput';
import Sheader from '../../../../components/Sheader';

import {DarkTheme, Surface, ThemeProvider} from 'react-native-paper';
import DropDown from 'react-native-paper-dropdown';

const JobDetails = ({navigation}) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [jobType, setJobType] = useState('');

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

  const handleSubmit = () => navigation.navigate('JobAcknowledge');

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
    <ThemeProvider theme={DarkTheme}>
      <View style={styles.container}>
        <Sheader title="Search for provider"></Sheader>
        <SafeAreaView>
          <Surface style={styles.containerStyle}>
            <SafeAreaView style={styles.safeContainerStyle}>
              <DropDown
                label={'Job Type'}
                mode={'outlined'}
                visible={showDropDown}
                showDropDown={() => setShowDropDown(true)}
                onDismiss={() => setShowDropDown(false)}
                value={jobType}
                setValue={setJobType}
                list={jobList}
              />
              <View style={styles.spacerStyle} />
            </SafeAreaView>
          </Surface>

          <Text style={styles.text}>When you want the work to be done?</Text>

          <Sdate title="Select Job Requesting Date and Time" />
          <Text style={styles.text}>Description about the issue?</Text>
          <StextInput label="Job Description" multiline={true} />
        </SafeAreaView>
        <View style={styles.btngrp}>
          <Sbutton type="primary" text="Submit" onPress={handleSubmit} />
          <Sbutton type="secondary" text="Cancel" onPress={AlertCancel} />
        </View>
      </View>
    </ThemeProvider>
  );
};

export default JobDetails;
