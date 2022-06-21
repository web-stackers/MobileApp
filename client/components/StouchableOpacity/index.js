import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import styles from './styles';

const StouchableOpacity = ({onPress, title}) => {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StouchableOpacity;
