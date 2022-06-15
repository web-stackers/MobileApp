import React, {useState, useEffect} from 'react';
import {Text, View, SafeAreaView, Alert} from 'react-native';

import styles from './styles';
import Sbutton from '../../../../components/Sbutton';
import StextInput from '../../../../components/FormComponents/StextInput';
import Sheader from '../../../../components/Sheader';
import Sselect from '../../../../components/FormComponents/Sselect';
import Sdate from '../../../../components/FormComponents/Sdate';

// import Job from '../../../../services/Job';
import axios from 'axios';

const JobDetails = ({navigation, route}) => {
  const {construction} = route.params;
  console.log('Construction');
  console.log(construction);

  const [requestedTime, setrequestedTime] = useState(new Date());
  const [jobType, setJobType] = useState('');
  const [description, setDescription] = useState('');
  const [providerLocation, setProviderLocation] = useState([]);
  const [providersList, setProvidersList] = useState([]);

  // let lat = 9.6615;
  // let longi = 80.0255;

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

  //consumerID->62132b7bc4afd22e5fc49677
  //Fetch consumer address
  const getProviderLocation = () => {
    axios
      .get('http://10.0.2.2:5000/consumer/address/62132c85c4afd22e5fc49685')
      .then(response => {
        console.log(response.data);
        setProviderLocation(response.data);
        console.log(providerLocation.address.latitude);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  //job Type : 627677045ef6e55d7f9bc966,
  //627676e75ef6e55d7f9bc961
  //62767b3215fa33d500a00559
  const getProviders = () => {
    axios
      .get('http://10.0.2.2:5000/provider/jobType/627676e75ef6e55d7f9bc961')
      .then(response => {
        console.log(response.data);
        setProvidersList(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getProviderLocation();
    getProviders();
  }, []);

  const handleSubmit = () => {
    if (jobType === '') {
      Alert.alert(
        'Job Type cannot be empty',
        'Please select what kind of service you need from the dropdown menu',
      );
    } else if (description === '') {
      Alert.alert(
        'Description cannot be empty',
        'Please provide a small description about the service you need. So that service provide can able to get a clear understanding',
      );
    } else {
      if (providersList.length > 0) {
        navigation.navigate('SearchProvider', {
          jobType: jobType,
          description: description,
          requestedTime: requestedTime,
          providersList: providersList,
          lat: providerLocation.address.latitude,
          longi: providerLocation.address.longitude,
        });
      } else {
        navigation.navigate('NoProviders');
      }
    }
  };

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

      <Sdate date={requestedTime} setDate={setrequestedTime} />

      <Text
        style={styles.linkText}
        onPress={() =>
          navigation.navigate('Map', {
            lat: providerLocation.address.latitude,
            longi: providerLocation.address.longitude,
          })
        }>
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
