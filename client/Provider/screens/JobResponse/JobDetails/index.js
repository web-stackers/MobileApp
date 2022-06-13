import React from 'react';
import {View, ScrollView, Image} from 'react-native';
import { Text } from 'react-native-paper';

import styles from './styles';
import Sbutton from '../../../../components/Sbutton';
import ScheckBox from '../../../../components/ScheckBox';

const JobDetails = ({navigation}) => {
  const [read, setRead] = React.useState(false);

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
