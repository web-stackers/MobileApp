import React from 'react';
import {View, ScrollView, Text, TextInput, Image} from 'react-native';

import styles from './styles';
import Sbutton from '../../../../components/Sbutton';

const JobDetails = ({navigation}) => {

  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.JDetailsPic}
        source={require('../../../../assets/images/JDetails.jpg')}
      />

      <Text style={styles.content}>Job Description</Text>
      <Text style={styles.content}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
      <Text style={styles.content}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>

      <View style={styles.btngrp}>
        <Sbutton
          primary={true}
          text="Accept"
          onPress={() => navigation.push('Quotation Details')}
        />
        <Sbutton
          text="Refuse"
          onPress={() => navigation.push('Refuse Job')}
        />
      </View>
    </ScrollView>
  );
};

export default JobDetails;
