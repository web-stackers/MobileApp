import React from 'react';
import {View} from 'react-native';
import { Button, Text } from 'react-native-paper';

import styles from './styles';

const Sbutton = ({ text, onPress}) => {

  return (
    <View style={styles.container}>
      <Button mode="contained" onPress={onPress} style={styles.button}>
        <Text style={styles.text}>{text}</Text>
      </Button>
    </View>
  )

  
};

export default Sbutton;
