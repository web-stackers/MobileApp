/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {Text, View, ImageBackground} from 'react-native';

import StouchableOpacity from '../../../../components/StouchableOpacity';
import styles from './styles';

import axios from 'axios';

const CategorySelector = ({navigation}) => {
  const jobTypeSelect = 'Mason';

  const [constructionList, setConstructionList] = useState([]);
  const [eventList, setEventList] = useState([]);

  //Get all jobtypes and their ids under construction category
  const getConstructionJobTYpes = () => {
    axios
      .get('http://10.0.2.2:5000/jobTypeCategory/constructionJobs')
      .then(response => {
        console.log(response.data);
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
        console.log(response.data);
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

  const ConstructionPress = () =>
    navigation.navigate('JobDetails', {
      construction: constructionList,
    });
  const EventPress = () =>
    navigation.navigate('QuotationDetails', {jobTypeSelect});
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <ImageBackground
          source={require('../../../../assets/images/mobile.jpg')}
          resizeMode="cover"
          style={styles.image}>
          <Text style={styles.test}>Helper</Text>
        </ImageBackground>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.subHeading}>What you are looking for?</Text>
        <StouchableOpacity onPress={ConstructionPress} title="Construction" />
      </View>
      <View style={styles.subContainer}>
        <StouchableOpacity onPress={EventPress} title="Event" />
      </View>
    </View>
  );
};

export default CategorySelector;
