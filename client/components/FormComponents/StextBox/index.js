import React from 'react';
import {TextInput} from 'react-native-paper';
import {useTheme} from 'react-native-paper';

import styles from './styles';

const StextBox = ({placeholder, onChangeText, value, disabled}) => {
  const {colors} = useTheme();

  return (
    <TextInput
      mode="outlined"
      outlineColor="#797D7F"
      activeOutlineColor={colors.primary}
      style={styles.input}
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
      disabled={disabled}
    />
  );
};

export default StextBox;
