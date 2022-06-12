import * as React from 'react';
import {TextInput} from 'react-native-paper';
import {useTheme} from 'react-native-paper';

import styles from './styles';

const StextInput = ({label, multiline, error, value, onChangeText}) => {
  const {colors} = useTheme();
  return (
    <TextInput
      keyboardType="default"
      returnKeyType="done"
      blurOnSubmit={true}
      label={label}
      value={value}
      outlineColor="#797D7F"
      activeOutlineColor={colors.primary}
      style={styles.input}
      mode="outlined"
      multiline={true}
      error={error}
      onChangeText={onChangeText}
    />
  );
};

export default StextInput;
