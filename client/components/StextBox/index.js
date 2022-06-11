import React from 'react';
import {TextInput} from 'react-native-paper';
import {useTheme} from 'react-native-paper';

import styles from './styles';

const StextBox = ({label, props}) => {
  const {colors} = useTheme();
  const [text, setText] = React.useState('');

  return (
    <TextInput
      mode="outlined"
      outlineColor="#797D7F"
      activeOutlineColor={colors.primary}
      style={styles.input}
      placeholder={label}
      onChangeText={text => setText(text)}
      value={text}
    />
  );
};

export default StextBox;
