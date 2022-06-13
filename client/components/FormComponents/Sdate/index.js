import React, {useState} from 'react';
import {Text, View} from 'react-native';
import RNDateTimePicker from '@react-native-community/datetimepicker';

import Sbutton from '../../Sbutton';
import styles from './styles';

const Sdate = ({date, setDate}) => {
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const thisYear = new Date().getFullYear();
  const maxWorkDate = new Date().setFullYear(thisYear + 2);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
  return (
    <View style={styles.container}>
      <Sbutton onPress={showDatepicker} text="Select Date" />
      <Sbutton onPress={showTimepicker} text="Select Time" />
      <Text style={styles.text}>Selected : {date.toLocaleString()}</Text>
      {show && (
        <RNDateTimePicker
          minimumDate={new Date()}
          maximumDate={maxWorkDate}
          themeVariant="dark"
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default Sdate;
