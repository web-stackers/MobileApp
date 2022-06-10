import React, {useState} from 'react';
import {Text, View, SafeAreaView, TextInput, Button} from 'react-native';

import styles from './styles';
import Sbutton from '../../../../components/Sbutton';

import Sdate from '../../../../components/FormComponents/Sdate';
import Stime from '../../../../components/FormComponents/Stime';
import StextArea from '../../../../components/FormComponents/StextArea';

import Sheader from '../../../../components/Sheader';

const JobDetails = ({navigation}) => {
  const handleSubmit = () => navigation.navigate('JobAcknowledge');
  const handleCancel = () => navigation.navigate('CategorySelector');

  return (
    <View style={styles.container}>
      <Sheader title="Search for provider"></Sheader>
      <SafeAreaView>
        <Text style={styles.text}>When you want the work to be done?</Text>
        <View style={styles.sideContainer}>
          <View style={styles.sideSubContainer}>
            <Text style={styles.subtext}>Date</Text>
          </View>
          <View style={styles.sideSubContainer}>
            <Sdate title="Select Job Requesting Date" />
          </View>
        </View>

        <View style={styles.sideContainer}>
          <View style={styles.sideSubContainer}>
            <Text style={styles.subtext}>Time</Text>
          </View>
          <View style={styles.sideSubContainer}>
            <Stime title="Select Job Requesting Time" />
          </View>
        </View>
        <Text style={styles.text}>Description about the issue?</Text>
        <StextArea></StextArea>
      </SafeAreaView>
      <View style={styles.btngrp}>
        <Sbutton type="primary" text="Submit" onPress={handleSubmit} />
        <Sbutton type="secondary" text="Cancel" onPress={handleCancel} />
      </View>
    </View>
  );
};

export default JobDetails;
