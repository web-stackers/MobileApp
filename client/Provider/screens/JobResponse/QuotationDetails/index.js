import React from 'react';
import {View, Text, TextInput, Image} from 'react-native';

import styles from './styles';
import StextBox from '../../../../components/FormComponents/StextBox';
import Sbutton from '../../../../components/Sbutton';

const QuotationDetails = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.QPic}
        source={require('../../../../assets/images/QPic.png')}
      />

      <View style={styles.quotationForm}>
        <StextBox label="Enter the required time" />

        <StextBox label="Enter estimated amount" />

        <Text style={styles.caption}>
          Enter the estimated amount and time duration to complete the job. It
          will be sent to the customer
        </Text>

        <Sbutton
          primary={true}
          text="Next"
          onPress={() => navigation.push('Quotation Preview')}
        />
      </View>
    </View>
  );
};

export default QuotationDetails;
