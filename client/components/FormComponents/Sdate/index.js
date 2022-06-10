import React, {useState} from 'react';
import {Text} from 'react-native';
import DatePicker from 'react-native-date-picker';
import SdateButton from '../SdateButton';
import styles from './styles';
const Sdate = ({title}) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <>
      <Text style={styles.dateText}>Date and Time: </Text>
      <Text style={styles.dateSubText}> {` ${date}`}</Text>

      <SdateButton text="Open" onPress={() => setOpen(true)} />
      <DatePicker
        modal
        open={open}
        date={date}
        mode="datetime"
        title={title}
        theme="dark"
        minimumDate={new Date()}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
};

export default Sdate;
