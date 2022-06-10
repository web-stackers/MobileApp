import * as React from 'react';
import {TextInput} from 'react-native-paper';

const StextInput = ({label, multiline}) => {
  const [text, setText] = React.useState('');

  return (
    <TextInput
      label={label}
      value={text}
      mode="outlined"
      multiline={multiline}
      onChangeText={text => setText(text)}
    />
  );
};

export default StextInput;
