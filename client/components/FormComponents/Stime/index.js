import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import SdateButton from '../SdateButton';

const Stime = ({title}) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <>
      <SdateButton text="Open" onPress={() => setOpen(true)} />
      <DatePicker
        modal
        open={open}
        date={date}
        mode="time"
        title={title}
        theme="dark"
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

export default Stime;
