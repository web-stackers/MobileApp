import React, {useEffect, useState} from 'react';
import {View, ScrollView, Image} from 'react-native';
import {Text} from 'react-native-paper';
import dateFormat from 'dateformat';

import axios from 'axios';
// import Job from '../../../../services/Job';

import styles from './styles';
import Sbutton from '../../../../components/Sbutton';
import ScheckBox from '../../../../components/ScheckBox';
import Map from '../../../../components/Map';

const DetailField = ({field, detail}) => {
  return (
    <View style={styles.detailField}>
      <Text style={styles.field}>{field}</Text>
      <Text style={styles.detail}>{detail}</Text>
    </View>
  )
}

const JobDetails = ({navigation}) => {
  const [read, setRead] = useState(false);
  const [job, setJob] = useState();

  const [state, setState] = useState("Request pending");

  const id = '621341023987d49e1f22f7a8';

  // Function to get job details
  const getJob = async () => {
    await axios
      .get('http://10.0.2.2:5000/job/621341023987d49e1f22f7a8')
      .then(response => {
        setJob(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
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

      {job && (
        <View style={styles.content}>
          <DetailField 
            field="Job Description"
            detail={job.description}
          />
          <DetailField 
            field="Photos"
            detail={job.description}
          />
          <DetailField 
            field="Date"
            detail={dateFormat(job.requestedTime, 'fullDate')}
          />
          <DetailField 
            field="Time"
            detail={dateFormat(job.requestedTime, 'hh:MM TT')}
          />
        </View>
      )}

      {/* Map to show location */}
      <View style={styles.map}>
        <Text style={styles.field}>Location</Text>
        {job && <Map lat={job.address.latitude} long={job.address.longitude} />}
      </View>
      
      {state==='Request pending' && <View style={styles.btngrp}>
        <ScheckBox
          checked={read}
          setChecked={setRead}
          text="I have read and understood the problem and requirements of above request"
        />

        <Sbutton
          primary={true}
          disabled={!read}
          text="Accept"
          onPress={() =>
            navigation.push('Quotation Details', {
              job: {job},
            })
          }
        />
        <Sbutton
          disabled={!read}
          text="Refuse"
          onPress={() => navigation.push('Refuse Job')}
        />
      </View>}

      {state==='Job Pending' && <View style={styles.btngrp}>
        <ScheckBox
          checked={read}
          setChecked={setRead}
          text="I wish to withdraw from this job"
        />

        <Sbutton
          primary={true}
          disabled={!read}
          text="Withdraw"
          onPress={() => navigation.push('Job Withdrawal', {
            arisedBy: 'provider',
            routeTo: 'Job Details'
          })}
        />
      </View>}

      {state==='Job completed' && <View style={styles.btngrp}>
        <Sbutton
          primary={true}
          text="Give Rating and Review"
          onPress={() => navigation.push('Rating and Review')}
        />
        <Sbutton
          primary={true}
          text="Make Complaint"
          onPress={() => navigation.push('Complaint')}
        />
      </View>}
    </ScrollView>
  );
};

export default JobDetails;
