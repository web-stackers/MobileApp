/* eslint-disable prettier/prettier */
import React, {useCallback, useEffect, useState} from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import {useTheme} from 'react-native-paper';
import { useFocusEffect } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import StouchableOpacity from '../../../../components/StouchableOpacity';
import styles from './styles';

import axios from 'axios';

const DetailField = ({detail, icon}) => {
  const {colors} = useTheme();

  return (
    <View style={styles.detailField}>
      <MaterialCommunityIcons
        name={icon}
        color="#fff"
        size={40}
        style={styles.icon}
      />
      <View style={styles.detailView}>
        <Text style={styles.detail}>{detail}</Text>
      </View>
    </View>
  );
};

const CategorySelector = ({userParams, navigation}) => {
  let consumerID = userParams._id;

  const [constructionList, setConstructionList] = useState([]);
  const [eventList, setEventList] = useState([]);

  const completeJobs = async () => {
    await axios
      .get(
        `http://10.0.2.2:5000/jobAssignment/state/completeJobs/consumer/${consumerID}`,
      )
      .catch(function (error) {
        console.log(error);
      });
  };

  //Get all jobtypes and their ids under construction category
  const getConstructionJobTYpes = () => {
    axios
      .get('http://10.0.2.2:5000/jobTypeCategory/constructionJobs')
      .then(response => {
        setConstructionList(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  //Get all jobtypes and their ids under event category
  const getEventJobTYpes = () => {
    axios
      .get('http://10.0.2.2:5000/jobTypeCategory/eventJobs')
      .then(response => {
        setEventList(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getConstructionJobTYpes();
    getEventJobTYpes();
  }, []);

  useFocusEffect(
    useCallback(() =>{
      completeJobs();
    }, [])
  )

  const ConstructionPress = () =>
    navigation.navigate('JobDetails', {
      job: constructionList,
      CID: consumerID,
    });
  const EventPress = () =>
    navigation.navigate('JobDetails', {
      job: eventList,
      CID: consumerID,
    });
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headingContainer}>
        <Image source={require('../../../../assets/images/logo.png')} />
      </View>

      <View style={styles.subContainer}>
        <Text style={styles.subHeading}>What you are looking for?</Text>
        <StouchableOpacity onPress={ConstructionPress} title="Construction" />
        <View style={styles.event}>
          <StouchableOpacity onPress={EventPress} title="Event" />
        </View>
      </View>

      <View style={styles.points}>
        <DetailField detail="Get jobs from skilled providers" icon="toolbox" />

        <DetailField
          detail="Get your work done at the requested time"
          icon="timer-sand"
        />
        <DetailField
          detail="Unnecessary withdrawals and serious complaints from providers may lead to blocking your account"
          icon="account-alert"
        />
      </View>
    </ScrollView>
  );
};

export default CategorySelector;
