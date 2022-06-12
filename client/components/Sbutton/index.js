import React from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {useTheme} from 'react-native-paper';

import styles from './styles';

const Sbutton = ({primary, text, onPress, disabled}) => {
  const {colors} = useTheme();

  return (
    <View style={styles.container}>
      <Button
        mode="contained"
        onPress={onPress}
        style={styles.button}
        disabled={disabled}
        color={primary ? colors.primary : colors.accent}
      >
        <Text style={styles.text}>{text}</Text>
      </Button>
    </View>
  );
};

export default Sbutton;
