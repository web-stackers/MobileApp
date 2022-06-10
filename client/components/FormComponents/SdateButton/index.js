import React from 'react';
import {View, Text, Pressable} from 'react-native';

import styles from './styles';

const SdateButton = ({text, onPress}) => {
  return (
    <View style={styles.container}>
      <Pressable style={[styles.button]} onPress={onPress}>
        <Text style={[styles.text]}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default SdateButton;
