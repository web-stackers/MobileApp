import React, {useState} from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

import Sbutton from '../../../components/Sbutton';
import axios from 'axios';

const JobScreen = ({navigation}) => {
  const JAID = '6213638f657adfba60a68786';
  const [quotations, setQuotations] = useState([]);
  const viewQuotation = () => {
    axios
      .get(`http://10.0.2.2:5000/jobAssignment/${JAID}`)
      .then(response => {
        console.log(response.data);
        setQuotations(response.data);
        console.log(quotations);
        navigation.navigate('QuotationDetails', {
          JobType: 'Mason',
          JA: response.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>This is a job screen</Text>
      <Sbutton primary={true} text="View Quotation" onPress={viewQuotation} />
      <Sbutton
        primary={true}
        text="Withdrawal Request"
        onPress={() =>
          navigation.navigate('JobWithdrawal', {
            JAID: JAID,
          })
        }
      />

      <Sbutton primary={true} text="Withdrawal Request" />
      <Sbutton
        primary={true}
        text="Make Complaint"
        onPress={() => {
          navigation.navigate('Let us know your issues');
        }}
      />
      <Sbutton
        primary={true}
        text="Make rating and review"
        onPress={() => {
          navigation.navigate('Ratings and Reviews');
        }}
      />
    </View>
  );
};

export default JobScreen;
