import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './styles';
import StextBox from '../../../../components/FormComponents/StextBox';
import Sdate from '../../../../components/FormComponents/Sdate';
import DateTimePicker from '../../../../components/DateTimePicker';
import Sbutton from '../../../../components/Sbutton';

const QuotationDetails = ({navigation}) => {
  const [time, setTime] = React.useState('');
  const [date, setDate] = React.useState(new Date());
  const [amount, setAmount] = React.useState('');

  return (
    <View style={styles.container}>
      <Image
        style={styles.QPic}
        source={require('../../../../assets/images/QPic.png')}
      />

      <View style={styles.quotationForm}>
        <DateTimePicker date={date} setDate={setDate} />

        <StextBox 
          placeholder="Enter estimated amount in Rs" 
          value={amount}
          onChangeText={(value) => setAmount(value)}
        />

        <Text style={styles.caption}>
          Enter the estimated date, time and amount to complete the job. It
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
