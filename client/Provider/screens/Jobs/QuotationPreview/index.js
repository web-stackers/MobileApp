import React from 'react';
import {View} from 'react-native';
import axios from 'axios';

import styles from './styles';
import Sbutton from '../../../../components/Sbutton';
import ScheckBox from '../../../../components/ScheckBox';
import Quotation from '../../../../components/Quotation';

const QuotationPreview = ({navigation, route}) => {
  const [checked, setChecked] = React.useState(false);
  const {job} = route.params.job;
  const JAID = route.params.JAID;

  // Function to post quotation to the database
  const handleSubmit = () => {
    axios.patch(`http://10.0.2.2:5000/jobAssignment/quotation/${JAID}`, {
      estimatedTime: route.params.completeTime,
      amount: route.params.amount,
    })
    .then((response) => {
      navigation.push('Acknowledgement', {
        title: 'Quotation Sent !',
        subtitle: "Please wait for the customer's response",
        routeTo: "Job History"
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <View style={styles.container}>
      <Quotation
        completeTime={route.params.completeTime}
        amount={route.params.amount}
        job={job}
      />

      <View style={styles.btngrp}>
        <ScheckBox
          checked={checked}
          setChecked={setChecked}
          text='I have read and confirm the details in above quotation'
        />

        <Sbutton
          primary={true}
          disabled={!checked}
          text="Send quotation"
          onPress={() => handleSubmit()}
        />

        <Sbutton
          disabled={!checked}
          text="Cancel"
          onPress={() => navigation.pop(2)}
        />
      </View>
    </View>
  );
};

export default QuotationPreview;