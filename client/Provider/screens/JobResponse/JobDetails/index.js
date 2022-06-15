import React, { useEffect, useState } from 'react';
import {View, ScrollView, Image} from 'react-native';
import { Text } from 'react-native-paper';

import axios from 'axios';
import Job from '../../../../services/Job';

import styles from './styles';
import Sbutton from '../../../../components/Sbutton';
import ScheckBox from '../../../../components/ScheckBox';

const JobDetails = ({navigation}) => {
  const [read, setRead] = useState(false);
  const [job, setJob] = useState();

  const id = '621341023987d49e1f22f7a8';

  const getJob = async () => {
    await axios.get('http://10.0.2.2:5000/job/621341023987d49e1f22f7a8')
      .then(response => {
        setJob(response.data);
        //console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  /* const getJob = () => {
    Job.fetchJob(id)
    .then((response) => {
      console.log(response.data);
    })
    .catch((e) => {
      console.log(e);
    })
  }; */

  useEffect(() => {
    getJob();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.JDetailsPic}
        source={require('../../../../assets/images/JDetails.png')}
      />

      {job && <Text style={styles.content}>
          <Text variant="displayLarge">Job Description{"\n"}</Text>
          <Text>{job.description}{"\n"}</Text>
          <Text>Photos{"\n"}</Text>
          <Text>{job.description}{"\n"}</Text>
          <Text>Required Visit Time{"\n"}</Text>
          <Text>{job.description}{"\n"}</Text>
          <Text>Location</Text>
        </Text>}
      
      <View style={styles.btngrp}>

        <ScheckBox
          checked={read}
          setChecked={setRead} 
          text='I have read and understood the problem and requirements of above request'
        />

        <Sbutton
          primary={true}
          disabled={!read}
          text="Accept"
          onPress={() => navigation.push('Quotation Details')}
        />
        <Sbutton
          disabled={!read}
          text="Refuse"
          onPress={() => navigation.push('Refuse Job')}
        />
      </View>
    </ScrollView>
  );
};

export default JobDetails;
