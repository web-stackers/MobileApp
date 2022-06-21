import React from 'react';
import {View, Text, Image, Alert} from 'react-native';

import styles from './styles';
import StextBox from '../../../../components/FormComponents/StextBox';
import DateTimePicker from '../../../../components/DateTimePicker';
import Sbutton from '../../../../components/Sbutton';

const QuotationDetails = ({navigation, route}) => {
  const {job} = route.params.job;
  const [date, setDate] = React.useState(new Date(job.requestedTime));
  const reqDate = new Date(job.requestedTime);
  const [amount, setAmount] = React.useState('');

  // Function to validate quotation details and navigate to quotation preview
  const validateDetails = () => {
    if (amount === ''||/^0/.test(amount)) {
      Alert.alert(
        'Amount cannot be empty or zero',
        'Please enter an estimated amount to finish the job',
      );
    } else if (/\D/.test(amount)) {
      Alert.alert(
        'Invalid input for amount',
        'Amount can contain only numbers. Please enter rounded up amount',
      );
      setAmount('');
    } else if (date.getTime()===reqDate.getTime()) {
      Alert.alert(
        'Invalid Time',
        'Please enter a valid estimated time when you can complete this job ',
      );
      setDate(reqDate);
    }else {
        navigation.push('Quotation Preview', {
          completeTime:`${date}`,
          amount:`${amount}`,
          job:{job},
          JAID: '62136a2d657adfba60a6878a'
      })
    }
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.QPic}
        source={require('../../../../assets/images/QPic.png')}
      />

      <View style={styles.quotationForm}>
        <DateTimePicker date={date} setDate={setDate} reqDate={reqDate} />

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
          onPress={() => validateDetails()}
        />
      </View>
    </View>
  );
};

export default QuotationDetails;