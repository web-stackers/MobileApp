import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';
import Sbutton from '../../../../components/Sbutton';
import ScheckBox from '../../../../components/ScheckBox';
import Quotation from '../../../../components/Quotation';

const QuotationPreview = ({navigation, route}) => {
  const [checked, setChecked] = React.useState(false);

  return (
    <View style={styles.container}>
      <Quotation 
        completeTime={route.params.completeTime}
        amount={route.params.amount}
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
          onPress={() =>
            navigation.push('Acknowledgement', {
              title: 'Quotation Sent !',
              subtitle: "Please wait for the customer's response",
            })
          }
        />

        <Sbutton
          disabled={!checked}
          text="Cancel"
          onPress={() => navigation.navigate('Job Details')}
        />
      </View>
    </View>
  );
};

export default QuotationPreview;
