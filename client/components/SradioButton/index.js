import React from 'react';
import {View} from 'react-native';
import {RadioButton, Text} from 'react-native-paper';

import styles from './styles';

const SradioButton = ({value, text}) => {
    return (
        <View style={styles.radioButton}>
          <RadioButton value={value} />
          <Text style={styles.text}>{text}</Text>
        </View>
    )
}

export default SradioButton;