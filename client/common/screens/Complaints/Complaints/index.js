import React from 'react';
import {Text, ScrollView, View, Pressable} from 'react-native';
import styles from './styles';

const Complaints = ({navigation}) => {
  //   const jobId = navigation.getParam('jobId');
  //   const complaintBy = navigation.getParam('by');

  const complaintBy = 'Consumer';
  const jobId = '621341023987d49e1f22f7a8';

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
      return providerComplaintCategory;
    } else {
      return consumerComplaintCategory;
    }
  };

  const categories = displayList();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.boxText}>
          Job Finished {'\n\n'}
          Job type {'\n\n'}
          {complaintBy} Name: name
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
