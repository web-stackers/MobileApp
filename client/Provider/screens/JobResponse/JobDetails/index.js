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

  /* const getJobDetails = async () => {
    await axios.get('http://10.0.2.2:5000/job/621341023987d49e1f22f7a8')
      .then(response => {
        setJob(response.data);
        //console.log(response.data);
        console.log(job);
      })
      .catch(function (error) {
        console.log(error);
      });
  }; */

  const getJob = () => {
    Job.fetchJob(id)
    .then((response) => {
      console.log(response.data);
    })
    .catch((e) => {
      console.log(e);
    })
  };

  useEffect(() => {
    getJob();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.JDetailsPic}
        source={require('../../../../assets/images/JDetails.png')}
      />

      <Text style={styles.content}>Job Description</Text>
      <Text style={styles.content}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
      <Text style={styles.content}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
      
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
