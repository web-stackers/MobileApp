import * as React from 'react';
import {TextInput} from 'react-native-paper';

const StextInput = ({label, multiline, error, value, onChangeText}) => {
  return (
    <TextInput
      label={label}
      value={value}
      mode="outlined"
      multiline={multiline}
      error={error}
      onChangeText={onChangeText}
    />
  );
};

export default StextInput;
