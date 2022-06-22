/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {Text, View, ImageBackground, Image} from 'react-native';

import StouchableOpacity from '../../../../components/StouchableOpacity';
import styles from './styles';

import axios from 'axios';

const CategorySelector = ({userParams, navigation}) => {
  //consumerID->62132b7bc4afd22e5fc49677
  //consumerID->62132c85c4afd22e5fc49685
  // console.log(userParams._id);
  let consumerID = userParams._id;

  const [constructionList, setConstructionList] = useState([]);
  const [eventList, setEventList] = useState([]);

  const completeJobs = async () => {
    await axios
      .get(
        `http://10.0.2.2:5000/jobAssignment/state/completeJobs/consumer/${consumerID}`,
      )
      /*.then(response => {
        setJob(response.data);
      })*/
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
    completeJobs();
  }, []);

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
    <View style={styles.container}>
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
    </View>
  );
};

export default CategorySelector;
