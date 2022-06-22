import React from 'react';
import {TextInput} from 'react-native-paper';
import {useTheme} from 'react-native-paper';

import styles from './styles';

const StextBox = ({placeholder, onChangeText, value, disabled, secureTextEntry}) => {
  const {colors} = useTheme();

  return (
    <TextInput
      mode="outlined"
      theme={{ roundness: 6 }} 
      outlineColor="#797D7F"
      secureTextEntry={secureTextEntry}
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
