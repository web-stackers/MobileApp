import React, {useState, useEffect} from 'react';
import {Text, View, SafeAreaView, Alert} from 'react-native';

import styles from './styles';
import Sbutton from '../../../../components/Sbutton';
import StextInput from '../../../../components/FormComponents/StextInput';
import Sheader from '../../../../components/Sheader';
import Sselect from '../../../../components/FormComponents/Sselect';
import Sdate from '../../../../components/FormComponents/Sdate';

import axios from 'axios';

const EventJobRequest = ({navigation, route}) => {
  const {event, CID} = route.params;

  const [requestedTime, setrequestedTime] = useState(new Date());
  const [jobType, setJobType] = useState('');
  const [description, setDescription] = useState('');
  const [providerLocation, setProviderLocation] = useState([]);
  const [providersList, setProvidersList] = useState([]);

  var newList = [];
  for (let i = 0; i < event.length; i++) {
    newList = newList.concat({
      label: event[i].jobType,
      value: event[i]._id,
    });
  }

  //Fetch consumer address
  const getProviderLocation = () => {
    axios
      .get(`http://10.0.2.2:5000/consumer/address/${CID}`)
      .then(response => {
        console.log(response.data);
        setProviderLocation(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getProviders = () => {
    console.log(
      'Function call..................................................',
    );
    axios
      .get(`http://10.0.2.2:5000/provider/jobType/${jobType}`)
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
  }, []);

  useEffect(() => {
    if (jobType !== '') {
      getProviders();
    }
  }, [jobType]);

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
          CID: CID,
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

  const handleMap = () => {
    navigation.navigate('Map', {
      lat: providerLocation.address.latitude,
      longi: providerLocation.address.longitude,
      CID: CID,
    });
  };

  return (
    <View style={styles.container}>
      <Sheader title="Search for provider" />
      <SafeAreaView>
        <View style={styles.containerStyle}>
          <Sselect
            jobList={newList}
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

      <View style={styles.btnMap}>
        <Sbutton text="Change Location" onPress={handleMap} />
      </View>

      <View style={styles.btngrp}>
        <Sbutton primary={true} text="Search Provider" onPress={handleSubmit} />
        <Sbutton text="Cancel" onPress={AlertCancel} />
      </View>
    </View>
  );
};

export default EventJobRequest;
