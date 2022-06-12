import React, {useState} from 'react';
import {Text, View} from 'react-native';
import RNDateTimePicker from '@react-native-community/datetimepicker';

import Sbutton from '../../Sbutton';
import styles from './styles';

const Sdate = ({date, setDate}) => {
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

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
    <View>
      <View>
        <Sbutton onPress={showDatepicker} text="Show date picker" />
      </View>
      <View>
        <Sbutton onPress={showTimepicker} text="Show time picker" />
      </View>
      <Text style={styles.text}>selected: {date.toLocaleString()}</Text>
      {show && (
        <RNDateTimePicker
          minimumDate={new Date()}
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
