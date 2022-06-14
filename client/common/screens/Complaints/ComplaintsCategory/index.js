import React from 'react';
import {Text} from 'react-native-paper';
import {View, ScrollView} from 'react-native';
import styles from './styles';
import StextInput from '../../../../components/FormComponents/StextInput';
import Sbutton from '../../../../components/Sbutton';

const ComplaintsCategory = ({route, navigation}) => {
  const complaintBy = route.params.by;
  const id = route.params.id;
  const title = route.params.title;

  const providerCategoryDescription = [
    {
      id: 0,
      name: 'This category is about consumer is not available in the given location at the given time. So the work is not yet completed according to the schedule.',
    },
    {
      id: 1,
      name: 'This category is about consumer paid less than the accepted amount even though the work is finished according to the requirements.',
    },
    {
      id: 2,
      name: 'This category is about consumer asked to do additional works rather than in the job request.',
    },
    {
      id: 3,
      name: 'This category is to provide any additional complaints which are not included in the provided complaints categories. You can mention all your issues here.',
    },
  ];
  const consumerCategoryDescription = [];

  const displayDescription = () => {
    if (complaintBy === 'Consumer') {
      return providerCategoryDescription;
    } else {
      return consumerCategoryDescription;
    }
  };

  const description = displayDescription()[id];

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.header}>{title}</Text>
      </View>
      <View style={styles.description}>
        <Text style={styles.content}>{description.name}</Text>
      </View>
      <View style={styles.box}>
        <StextInput label="You may enter your specific queries here" />
      </View>
      <View style={styles.btngrp}>
        <Sbutton
          primary={true}
          text="Submit"
          onPress={() => navigation.navigate('Acknowledge')}
        />
      </View>
    </ScrollView>
  );
};

export default ComplaintsCategory;
