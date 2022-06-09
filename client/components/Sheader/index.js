import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styles from './styles';

const Sheader = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Sheader;
