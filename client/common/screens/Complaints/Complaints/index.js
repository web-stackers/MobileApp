import React, {useState, useEffect} from 'react';
import {Text, ScrollView, View, Pressable} from 'react-native';
import styles from './styles';
import axios from 'axios';

const Complaints = ({navigation}) => {
  //   const jobId = navigation.getParam('jobId');
  //   const complaintBy = navigation.getParam('by');

  const complaintBy = 'Consumer';
  const jobId = '621341023987d49e1f22f7a8';

  const [job, setJob] = useState([]);
  const [name, setName] = useState([]);
  const [complaintTo, setComplaintTo] = useState('Provider');

  const providerComplaintCategory = [
    {
      id: 0,
      name: 'Consumer was not present in the place',
    },
    {
      id: 1,
      name: 'Paid less',
    },
    {
      id: 2,
      name: 'Asked to do additional work',
    },
    {
      id: 3,
      name: 'Other',
    },
  ];

  const consumerComplaintCategory = [
    {
      id: 0,
      name: 'Provider was absent',
    },
    {
      id: 1,
      name: 'Provider was late',
    },
    {
      id: 2,
      name: 'Quality of the work is bad',
    },
    {
      id: 3,
      name: 'Asked additional money',
    },
    {
      id: 4,
      name: 'Other issues',
    },
  ];

  const displayList = () => {
    if (complaintBy === 'Consumer') {
      return consumerComplaintCategory;
    } else {
      setComplaintTo('Consumer');
      return providerComplaintCategory;
    }
  };

  const categories = displayList();

  // Fetch particular job
  const getJob = () => {
    axios
      .get(`http://10.0.2.2:5000/job/${jobId}`)
      .then(response => {
        setJob(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // Fetch user name
  const getName = () => {
    if (complaintBy === 'Consumer') {
      // const id = job.providerId;
      const id = '62a06e2bafddf297d7b90069';

      axios
        .get(`http://10.0.2.2:5000/provider/get/provider/name/${id}`)
        .then(response => {
          setName(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      // const id = job.consumerId;
      const id = '62132b7bc4afd22e5fc49677';
      axios
        .get(`http://10.0.2.2:5000/consumer/get/consumer/name/${id}`)
        .then(response => {
          setName(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    getJob();
    getName();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.boxText}>
          Job Type - {job.jobType} {'\n\n'}
          {complaintTo} Name - {name.fName} {name.lName}
        </Text>
      </View>
      <Text style={styles.content}>Choose the category</Text>

      <View>
        {categories.map(category => (
          <Pressable
            key={category.id}
            style={styles.list}
            onPress={() =>
              navigation.push('Complaint Category', {
                by: complaintBy,
                title: category.name,
                id: category.id,
                jobId: jobId,
              })
            }>
            <Text style={styles.text}>{category.name}</Text>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
};

export default Complaints;
